#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int main(){
    int number, guess, nguesses=0;
    srand(time(0));
    number = rand()%100 +1; // will generate a random number.
    //
    // keep running the number is guessed
    do{
        printf("Guess the number between 1 and 100.\n");
        scanf("%d", &guess);
    
    if(guess>number){
        printf("Lower number please!\n");

    }
    else if(guess<number){
        printf("Higher the number please!\n");
    }
    else{
        printf("you have guessed it in %d attempts!!\n", nguesses);
    }
    nguesses++;
    }while(guess!=number);
    return 0;
}