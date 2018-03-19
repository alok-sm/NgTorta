CC = cc 
CFLAGS = -include cliclick_Prefix.pch -I Actions -I .

cliclick: Actions/ClickAction.o \
          Actions/ColorPickerAction.o \
          Actions/DoubleclickAction.o \
          Actions/DragDownAction.o \
          Actions/DragUpAction.o \
          Actions/KeyBaseAction.o \
          Actions/KeyDownAction.o \
          Actions/KeyDownUpBaseAction.o \
          Actions/KeyPressAction.o \
          Actions/KeyUpAction.o \
          Actions/MouseBaseAction.o \
          Actions/MoveAction.o \
          Actions/PrintAction.o \
          Actions/TripleclickAction.o \
          Actions/TypeAction.o \
          Actions/WaitAction.o \
          ActionExecutor.o \
          KeycodeInformer.o \
          cliclick.o
	gcc -o cliclick $^ -framework Cocoa -framework Carbon

install: cliclick
	cp cliclick /usr/local/bin/

clean:
	@rm -vf *.o Actions/*.o
	@rm -vf cliclick
