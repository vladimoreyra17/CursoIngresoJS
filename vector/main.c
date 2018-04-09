#include <stdio.h>
#include <stdlib.h>
void ordenar(int vect[], int tam, int ordenar );
void mostrarvector(int[], int);
int main()
{
    int x[]={34,4,23,12,7};
    ordenar(x,5, 1);
    mostrarvector(x,5);
    return 0;
}

void ordenar(int vect[], int tam, int criterio)
{
    int i,j,aux;
    for(i=0; i<(tam-1); i++)
    {
        for(j=i+1; j<tam; j++)
        {
            if(vect[i]<vect[j] && criterio==0)
            {
                aux=vect[i];
                vect[i]=vect[j];
                vect[j]=aux;
            }
            if(vect[i]>vect[j] && criterio==1)
             {
                aux=vect[i];
                vect[i]=vect[j];
                vect[j]=aux;
             }
        }
    }
}
void mostrarvector(int vect[], int tam)
{
   int i;
   for(i=0; i<tam; i++)
   {
       printf("%d ",vect[i]);
   }
   printf("\n\n");
}
