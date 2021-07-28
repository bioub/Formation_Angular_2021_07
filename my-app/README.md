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
