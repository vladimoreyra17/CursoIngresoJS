#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <conio.h>

#define ESC 27
#define CANT 31

int main()
{
    char nombre[CANT];
    char aux[CANT * 10];
    char letra;
    int letras;

    do{
        system("cls");
        /* Linux
        system("clear");
        */

        do{
            printf("Nombre: ");
            fflush(stdin);
            //scanf("%s", nombre);
            scanf("%[^\n]", aux);
            letras = strlen(aux);
        }while(letras >30);

        printf("\nFuera de la validacion!");
        strcpy(nombre, aux);

        printf("\nEl nombre es: %s", nombre);

        printf("\n\nPresione cualquier tecla para continuar... ESC para salir");

        letra = getch();

    }while(letra != ESC);

    return 0;
}
