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

## Forms

Dans UserAddComponent, en utilisant le style de votre choix (Reactive Forms ou Template Driven Forms) créer un formulaire avec 3 champs :

- name
- email
- phone

Ajouter des validateurs required pour name et email, et email pour email.

Valider les champs lorsque l'utilisateur quitte le champ (événément blur), afficher le champs en rouge ou en vert et afficher une erreur (champs obligatoire, format email incorrect).

Ajouter une méthode create dans UserService qui recoit en entrée un User et qui retourne l'observable en utilisant la méthode post de HttpClient.

Lorsque le formulaire est valide appeler la méthode create et souscrire à l'observable pour déclencher la requete

Rediriger vers le composant User avec la méthode navigate du router.

