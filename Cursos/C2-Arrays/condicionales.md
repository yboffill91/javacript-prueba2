# Condicionales

## Bloques if

Se ejecutan si la condicion es verdatdera

``` js
    if (true){
        accion;
    }
```

Tambien se pueden acompanar de Else

``` js
    if (true){
        accion1
    } else if (true){
        accion2
    } else{
        accion3
    }
```

## Bucles while

Se ejecutan siempre que se cumpla una condicion.

``` js
while (verdader){
    accion
}
```

``` js
let arreglo=[1,2,3,4,5,6,7,8,9,0];
let num=0;
while (num<arreglo.lenght){
    console.log(arreglo[num]);
    num++;
}
```

## Bucles do while

Ejecutan una accion mientras se cumpla la condicion

```js
do accion;
while (condicion);
```

``` js
let arreglo=[1,2,3,4,5,6,7,8,9,0];
let num=0;
do {
    console.log(arreglo[num]);
    num++
}while (num<arreglo.lenght);
```

## Break y Continue

Break detiene la ejecucion del bucle
Continue hace un salto en una condicion especifica.

``` js
let num=0;
while (num<=1000){
    document.write(num);
    num++
    if (num==10){
        break;
    }
}
```

``` js
let num=0;
while (num<=1000){
    document.write(num);
    num++
    if (num==10){
        continue;
    }
}
```

## Bucles for

Bucles determinados

``` js
for (let i=0; i<=1000; i==>){
    accion
}
```

## Bucles for in y for of

### for in

For in trabaja con los index de los arreglos

``` js
const frutas=["manzana","mango","guayaba"];
for (fruta in frutas){
    accion
}
```

### for of

For of trabaja con los elementos de los arreglos

``` js
const frutas=["manzana","mango","guayaba"];
for (fruta of frutas){
    accion
}
```

## Label

Label permite etiquetar un bucle

``` js
const frutas=["manzana","mango","guayaba"];
const alimentos=["frutilla","platano",frutas,"fresa"];
arreglo1:
    for (alimento in alimentos){
        document.write(alimento);
        if (alimento==3){
            for (fruta in frutas){
                document.write(fruta);
                if (fruta == platano){
                    break arreglo1
                }
            }
        }
    }
    ```
