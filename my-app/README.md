# Exercices

## Routeur

Créer un module `users` avec le module de routing avec la commande `ng generate module` (server vous des options -d et --help pour vérifier comment créer le module de routing)

Dans ce module ajouter 3 composants :

- users
- user-add
- user-details

Vérifier avec l'option -d avant de créer les composants qu'il seront bien créé dans users

Importer le module users dans AppModule en faisant attention à l'ordre des modules.

Créer 3 routes dans users-routing.module et vérifier que tout fonctionne

| Path          | Component              |
| ------------- | ---------------------- |
| `users`     | `UsersComponent`       |
| `users/add` | `UserAddComponent`     |
| `users/:id` | `UserDetailsComponent` |

Créer un lien pour accéder à UserComponent dans la top-bar

Créer des lien pour accéder à UserAddComponent et UserDetailsComponent dans le composant UserComponent

(Dans le path `'users/:id'`, `:id` devra être remplacé par un nombre au moment de créer le lien).

## Service + HttpClient

Générer un TodoService dans le module todos (tester avec -d au moment de la génération)

Pas besoin de créer un provider (on garde celui de l'annotation injectable)

Dans TodoService, injecter HttpClient

Créer une méthode getAll comme dans users qui enverra un requete GET vers https://jsonplaceholder.typicode.com/todos

Injecter le TodoService dans TodoComponent et executer la requete dans ngOnInit pour remplir ou compléter le tableau.

Bonus : avec l'opérateur map de RxJS et la méthode map du type Array (au niveau du service) retirer les clés userId de la réponse.
