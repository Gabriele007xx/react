Un componente è una parte dell'interfaccia utente (pulsante, form, ecc.) riutilizzabile.
In react i componenti non sono nient'altro che funzioni javascript che restituiscono un nodo
html. 

I nomi devono iniziare con una lettera maiuscola.

Esempio di pulsante:

```
function MyButton()
{
    return (<button>Esempio</button>);
}
```

## Props

I props permettono di cambiare le informazioni visualizzate:

```
function MyButton(props)
{
    return (<button>Esempio per {props.username}</button>);
}

// in un altro file
<MyButton username="Matteo"/>
```

## Stile

Per mettere lo stile si può importare un file css:

```
import ..\App.css;
```
la classe, nella sintassi JSX viene chiamata className:

```
function MyButton()
{
    return (<button className="pulsante">Esempio</button>);
}
```

## Tips

- si possono passare funzioni dentro le parentesi graffe.
- si possono passare oggetti come props.

```
const user = {
name: "marco"
};

<MyButton user={user}/>

//in un altro file

function MyButton(props)
{
    return (<button>Esempio per props.user.name</button>);
}
```

- si possono usare le espressioni ternarie.

```
const user = {
    eta:18,
    nome: "marino"
}

function MyButton(props)
{
    return (<button>eta>=18 ? maggiorenne : minorenne</button>)
}
```