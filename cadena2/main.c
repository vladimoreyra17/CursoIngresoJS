#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>

#define ESC 27
#define CANT 31

int main()
{
    char nombre[CANT];
    char nombre2[CANT];
    char aux[CANT * 10];
    char aux2[CANT * 10];
    char letra;
    int letras;

    do{
        system("cls");

        do{
            printf("Nombre: ");
            fflush(stdin);
            //scanf("%s", nombre);
            scanf("%[^\n]", aux);
            letras = strlen(aux);
        }while(letras >=30);

        do{
            printf("\nNombre2: ");
            fflush(stdin);
            //scanf("%s", nombre);
            scanf("%[^\n]", aux2);
            letras = strlen(aux2);
        }while(letras >=30);

        printf("\nFuera de la validacion!");
        strcpy(nombre, aux);
        strcpy(nombre2, aux2);

        if(strcmp(nombre, nombre2) == 0){
            printf("\nAmbos nombres son iguales");
        }
        else{
            if(strcmp(nombre, nombre2) > 0){
                printf("\nEl primer nombre es mayor que el segundo");
            }
            else{
                printf("\nEl segundo nombre es mayor que el primero");
            }
        }

        printf("\nEl Nombre es: %s", nombre);

        printf("\nEl Nombre2 es: %s", nombre2);

        printf("\n\nPresione cualquier tecla para continuar... ESC para salir");

        letra = getch();

    }while(letra != ESC);

    return 0;
}
