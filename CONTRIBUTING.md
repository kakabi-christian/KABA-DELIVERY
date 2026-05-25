<!-- CONTRIBUTING.MD -->
# Guide de Contribution - KABA-DELIVERY

Bienvenue dans l'équipe de développement d'**AFRIQ-LOGISTIX S.A.** Pour maintenir un historique de code clair, traçable et faciliter l'automatisation de nos futurs pipelines CI/CD, nous appliquons strictement la convention **Conventional Commits**.

---

## 1. Format du Message de Commit

Chaque message de commit doit respecter la structure suivante :
`type(portée): description`

### Les Types autorisés :
* **feat**: Une nouvelle fonctionnalité pour l'application (ex: `feat(api): ajout de l'endpoint de suivi en temps réel`).
* **fix**: La correction d'un bug (ex: `fix(frontend): correction du rafraîchissement de la carte de livraison`).
* **docs**: Modifications ou ajouts dans la documentation (ex: `docs: mise à jour du fichier de configuration`).
* **style**: Changements de style qui n'affectent pas la logique du code (espaces, formatage, points-virgules manquants, etc.).
* **refactor**: Modification du code qui ne corrige aucun bug et n'ajoute pas de fonctionnalité (optimisation).
* **test**: Ajout de tests manquants ou correction de tests existants (ex: `test(backend): ajout du test unitaire pour le calcul des tarifs`).
* **chore**: Mise à jour des tâches d'infrastructure, des outils de build ou des dépendances (ex: `chore: mise à jour de l'image de base Node dans le Dockerfile`).

---

## 2. Processus de Validation (Workflow Git)

1. **Branche de fonctionnalité** : Ne développez jamais directement sur les branches `main` ou `develop`. Créez toujours une branche dédiée à partir de `develop` (ex: `feature/api-delivery`).
2. **Pull Request (PR)** : Une fois votre travail terminé, ouvrez une Pull Request (ou Merge Request) de votre branche vers la branche `develop`.
3. **Revue par les pairs** : La PR doit impérativement être validée par **au moins un autre développeur** de l'équipe avant d'être fusionnée.
4. **Pipeline CI** : Tous les tests automatiques doivent passer avec succès avant l'intégration finale.