/*jslint white:true */
/*global angular */

var app = angular.module("calculatorApp", []);
app.controller("myCalculator", function ($scope) 
{
    "use strict";
	//Initialise variables
    $scope.memory = "0";
    $scope.tempMemory = "0";
    $scope.output = "0";
    $scope.result = "0";
	$scope.realresult = "0";
    $scope.initialValue = 0;
    $scope.operatorClicked = false;

    $scope.aOperations = false;

    $scope.updateOutput = function (btn) 
	{
        if ($scope.aOperations) 
		{
            $scope.output = 0;
            $scope.aOperations = false;
        } 
		else if ($scope.output === "0") //If output is currently 0. Strict comparison
		{
            $scope.output = btn; //Ouput is equal to value of btn
        } 
		else 
		{
            $scope.output += btn; //Concatinates output with with value of btn.
            $scope.operatorClicked = false;

        }
    };
	
	    $scope.updateOutputTwo = function ($scope) 
	{
        if ($scope.aOperations) 
		{
            $scope.output = 0;
            $scope.aOperations = false;
        } 
		else if ($scope.output === "0") //If output is currently 0. Strict comparison
		{
            $scope.output = btn; //Ouput is equal to value of btn
        } 
		else 
		{
            $scope.output += btn; //Concatinates output with with value of btn.
            $scope.operatorClicked = false;

        }
    };

    $scope.aOperators = function (op) 
	{
        if ($scope.output && !$scope.operatorClicked) 
		{
            $scope.output += String(op);
            $scope.operatorClicked = true;
        }
    };

    $scope.calculating = function () 
	{
        $scope.result = eval($scope.output);
		if(!$scope.realresult)
		{
					$scope.realresult = eval($scope.output);

		}
		else
		{
					$scope.realresult = 0;

		}
    };

    $scope.reset = function () //Reset
	{
        $scope.output = "0";
        $scope.result = "0";
		$scope.realresult="0";
        $scope.operatorClicked = false;
    };

    $scope.memReset = function () //Resets the memory
	{
        $scope.output = "0";
        $scope.result = "0";
        $scope.memory = "0";
		$scope.realresult="0";
    };

    $scope.memRecall = function () 
	{
		$scope.realresult = $scope.memory;
    };

    $scope.memAdding = function () 
	{

		$scope.realresult=eval($scope.output);
		$scope.memory = $scope.memory + "+" + $scope.output;
        $scope.memory = eval($scope.memory);
        $scope.result = $scope.memory;
		//$scope.output=eval(scope.output)
		

    };
    
    /**Temporary memory used because it keeps changing to 1 if try to subtract stored memory**/

    
    $scope.memSubtracting = function ()
	{
		
		$scope.realresult=eval($scope.output);
		$scope.temporaryMemory = $scope.output;
        $scope.temporaryMemory = eval($scope.temporaryMemory);
        $scope.memory = $scope.memory + "-" + $scope.temporaryMemory;
        $scope.memory = eval($scope.memory); /** have to use eval again so that it wont show the arithmetic operation when recall is called **/
        $scope.result = $scope.memory;
			
			
			
      
    };
    
});/** eval ensures arithmetic operations wont be shown upon recall **/



		/*
		if(!$scope.memory)
		{
		$scope.tempMemory = $scope.output;
        $scope.tempMemory = eval($scope.tempMemory);
        $scope.memory = $scope.memory + "-" + $scope.tempMemory; //Subtract
        $scope.memory = eval($scope.memory);
        $scope.result = $scope.memory; 
		console.log("If scope.memory  empty")
		}
		
		else
		{
			console.log($scope.output);
			$scope.tempMemory=$scope.output;
			$scope.tempMemory = eval($scope.tempMemory);
			$scope.memory = $scope.memory + "-" + $scope.tempMemory; //Subtract
			$scope.memory = eval($scope.memory);
			$scope.result = $scope.memory; 
			console.log("sir this is scope memory " + $scope.memory);
			console.log("If scope.memory not empty")
		}*/
		
		
		/*
		$scope.tempMemory=eval($scope.output);
		console.log("During subtraction scope output is " + $scope.output);
			//$scope.tempMemory = eval($scope.tempMemory);
			$scope.memory = $scope.tempMemory; //Subtract
			$scope.memory = eval($scope.memory);
			console.log("New memory  " +$scope.memory);
			$scope.result = $scope.memory;*/
			/*
			$scope.tempMemory=eval($scope.output);
													console.log("During subtraction scope output is " + $scope.tempMemory);
			
			$scope.memory -= $scope.tempMemory; //Subtract
			$scope.memory = eval($scope.memory);
													console.log("New memory  " +$scope.memory);
			//$scope.result = $scope.memory;*/
		
		
		
		
		
		
		
		
				/*
		if(!$scope.memory)
		{
			$scope.memory = $scope.memory + "+" + $scope.output; //scope output initially 0
			$scope.memory = eval($scope.memory); //evaluates
			$scope.result = $scope.memory; //Stores the memory
		}
		
		else
		{
			$scope.memory=0;
			$scope.memory = $scope.memory + "+" + $scope.output; //scope output initially 0
			$scope.memory = eval($scope.memory); //evaluates
			$scope.result = $scope.memory; //Stores the memory
			
		} */
		/*
		
							console.log("Scope memory before " +$scope.memory);
		$scope.memory = $scope.memory + "+" + $scope.output; //scope output initially 0
		$scope.output=eval($scope.output);
		console.log("Output is " + $scope.output);

		$scope.memory = eval($scope.memory); //evaluates
				console.log("New memory  " +$scope.memory);
				
		$scope.result = $scope.memory; //Stores the memory*/
		
		