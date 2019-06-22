from .models import Reviews, Items, Cluster, CustomUser
from sklearn.cluster import KMeans
from scipy.sparse import dok_matrix, csr_matrix
import numpy as np


def update_clusters():
    num_reviews = Reviews.objects.count()
    update_step = ((num_reviews/100)+1) * 5
    if num_reviews % update_step == 0:

        all_user_names = map(lambda x: x.username,
                             CustomUser.objects.only("username"))
        all_item_ids = set(
            map(lambda x: x.item.id, Reviews.objects.only("item")))
        num_users = len(all_user_names)
        ratings_m = dok_matrix(
            (num_users, max(all_item_ids)+1), dtype=np.float32)
        for i in range(num_users):
            user_reviews = Reviews.objects.filter(user_name=all_user_names[i])
            for user_review in user_reviews:
                ratings_m[i, user_review.item.id] = user_review.starsReview

        # Perform kmeans clustering
        k = int(num_users / 10) + 2
        kmeans = KMeans(n_clusters=k)
        clustering = kmeans.fit(ratings_m.tocsr())

        # Update clusters
        Cluster.objects.all().delete()
        new_clusters = {i: Cluster(name=i) for i in range(k)}
        for cluster in new_clusters.values():
            cluster.save()
        for i, cluster_label in enumerate(clustering.labels_):
            new_clusters[cluster_label].users.add(
                CustomUser.objects.get(username=all_user_names[i]))
