---
slug: /skypatrol/tt_8750/configuration
id: tt_8750-configuration
sidebar_label: Configuration
title: SkyPatrol - TT 8750+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SkyPatrol TT 8750+ para Plaspy, con ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración SkyPatrol TT 8750+
  - Instalación SkyPatrol TT 8750+
  - Configuración de servidor TT 8750+
  - Configuración TT 8750+ para Plaspy
  - Configuración de rastreador Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración de seguimiento de vehículos
  - Comandos AT para dispositivos GPS
  - Reglas de reporte del rastreador
  - Configuración de servidor de telemetría
---

# SkyPatrol - Configuración TT 8750+

Esta página documenta el contexto público de configuración para usar el rastreador SkyPatrol TT 8750+ con Plaspy. Reúne los ajustes compartidos del servidor Plaspy y los comandos y pasos de dispositivo que comúnmente se emplean para apuntar un TT 8750+ al endpoint de Plaspy. Utilice esta guía para comprender qué se requiere antes de integrar el dispositivo con Plaspy y qué comandos del fabricante se aplican habitualmente.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que aparecen a continuación provienen de fragmentos públicos de configuración del TT 8750+ y deben aplicarse con cuidado, siguiendo las prácticas de su instalador y la documentación oficial de SkyPatrol.

## Resumen de la configuración

Configurar el TT 8750+ para Plaspy prepara el dispositivo para enviar sus mensajes de posición y eventos al endpoint de Plaspy, de modo que el rastreador sea visible y gestionable en la plataforma. El proceso normalmente establece parámetros APN, configura el destino del servidor, define reglas y temporizadores de reporte y guarda los ajustes en el dispositivo.

- Definir el APN del dispositivo y, si hace falta, las credenciales APN para que el módem abra una conexión de datos.
- Configurar el destino del servidor Plaspy usando el dominio o la IP pública y el puerto compartido de Plaspy.
- Definir temporizadores de reporte y reglas de evento para que el rastreador envíe actualizaciones periódicas y por eventos.
- Guardar la configuración en la memoria del dispositivo para que los ajustes persistan tras ciclos de alimentación.
- Reiniciar o resetear el dispositivo cuando sea necesario para aplicar los nuevos parámetros de red y servidor.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com es el nombre canónico de servidor Plaspy que debe configurarse en el rastreador.
- La IP de servidor 54.85.159.138 es el endpoint público de Plaspy que puede usarse si se requiere una dirección numérica.
- El puerto 8888 es el puerto único que usa Plaspy para todos los dispositivos y debe configurarse en el rastreador.
- Se admite transporte UDP o TCP; el rastreador puede configurarse para usar cualquiera de los dos para llegar a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario elegir un perfil específico por protocolo en la plataforma.

## Requisitos típicos antes de la configuración

- Un TT 8750+ alimentado dentro del rango de tensión operativo y correctamente instalado en el vehículo o en un banco de pruebas.
- Una SIM celular activa con plan de datos y el APN correcto para la red del operador.
- Acceso al método de configuración oficial de SkyPatrol o a la herramienta del proveedor para enviar comandos AT o archivos de configuración específicos del proveedor.
- Un medio para comunicarse con el dispositivo (consola serial, adaptador USB, software de configuración o SMS si el proveedor lo soporta).
- Conocimientos básicos sobre cómo guardar y reiniciar el dispositivo para que los cambios se persistan y se apliquen.
- Acceso a la documentación de soporte de SkyPatrol o a recursos del proveedor para notas específicas de firmware.

## Cómo se conecta este rastreador a Plaspy

Cuando el TT 8750+ se configura para Plaspy, abre una sesión de datos y transmite mensajes de posición y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes del rastreador y los asigna al dispositivo correcto mediante detección automática del protocolo.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El rastreador puede usar transporte UDP o TCP al enviar datos a Plaspy.
- Los intervalos de reporte y los disparadores de eventos suelen controlarse con comandos estilo AT$TTCNT y AT$TTFNT en el TT 8750+.
- Plaspy detecta automáticamente el protocolo del dispositivo y parsea los mensajes entrantes para mostrar ubicación y eventos.
- Una vez que el rastreador envía mensajes con éxito a Plaspy, el dispositivo aparecerá y transmitirá datos en la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de SkyPatrol o al software proporcionado por el proveedor para enviar comandos AT o cargar un perfil de configuración.
2. Ingrese d.plaspy.com como dominio del servidor o use 54.85.159.138 como IP del servidor cuando el dispositivo requiera una dirección numérica.
3. Configure el puerto del servidor en 8888 en el dispositivo.
4. Elija UDP o TCP si el rastreador requiere selección explícita de transporte durante la configuración.
5. Configure los ajustes APN y cualquier credencial necesaria para que la SIM establezca la conexión de datos.
6. Aplique o guarde la configuración en el dispositivo (en el TT 8750+ esto normalmente se hace con AT&W u otro comando de guardado equivalente).
7. Reinicie o resetee el dispositivo si es necesario para que los nuevos ajustes entren en vigor.
8. Valide que el dispositivo reporta a Plaspy comprobando los mensajes que llegan al endpoint de Plaspy o confirmando la visibilidad en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos son ejemplos públicos usados para configurar un SkyPatrol TT 8750+. Conservan el orden original e incluyen marcadores de posición donde procede. Reemplace marcadores como {{apn}}, {{apnu}} y {{apnp}} con el APN y credenciales de su operador.

Initial reset to factory defaults and save
```
AT&F
AT&W
```

Set APN for data connection
```
AT+CGDCONT=1,"IP","{{apn}}"
```

Optional APN username and password command (include only if required by your operator)
```
AT$CGPCO=1,"{{apnu}},{{apnp}}",0
```

Configure Plaspy server destination using the Plaspy public IP and port 8888
```
AT$TTSRVDST=1,1,"54.85.159.138",8888,2
```

Set message mask (controls which message types are sent)
```
AT$TTMSGMASK=1,1065353215
```

Configure periodic reporting when device is turned on and off and other timers
```
AT$TTCNT=1,2,60
AT$TTFNT=10,0,14,1,0
AT$TTFNT=10,2,9,1,1
AT$TTFNT=10,3,20,10,1

AT$TTCNT=2,2,60
AT$TTFNT=11,0,14,2,0
AT$TTFNT=11,2,9,0,0
AT$TTFNT=11,3,20,11,1
```

Example event driven reporting rules (input events, battery disconnect, motion and similar)
```
AT$TTFNT=20,0,0,1,1
AT$TTFNT=20,3,20,1,1

AT$TTFNT=21,0,0,0,0
AT$TTFNT=21,3,20,1,1

AT$TTFNT=12,0,1,1,1
AT$TTFNT=12,3,20,4,1

AT$TTFNT=13,0,1,0,0
AT$TTFNT=13,3,20,5,1

AT$TTFNT=14,0,3,0,0
AT$TTFNT=14,3,20,6,1
```

Additional optional or commented rules from vendor examples
```
'AT$TTFNT=15,0,71,2,3
'AT$TTFNT=15,3,20,7,1

'AT$TTFNT=16,0,71,1,1
'AT$TTFNT=16,3,20,16,1
```

Ignition and other inputs examples
```
AT$TTFNT=17,0,3,0,0
AT$TTFNT=17,3,20,17,1

' AT$TTFNT=37,0,7,1,1
AT$TTFNT=37,0,9,1,1
AT$TTFNT=37,3,20,2,1

' AT$TTFNT=38,0,7,0,0
AT$TTFNT=38,0,9,0,0
AT$TTFNT=38,3,20,3,1
```

Set target profile and save to flash
```
AT$TTARG=2
AT&W
```

Optional restart to apply settings
```
AT$RESET
```
Notas sobre los marcadores de posición: {{apn}} es el APN celular de su SIM. {{apnu}} y {{apnp}} son valores opcionales de usuario y contraseña APN usados por algunos operadores. Mantenga los marcadores de posición sin cambios hasta reemplazarlos por sus valores reales del operador.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los comandos AT disponibles o la semántica de los parámetros; verifique el conjunto de comandos exacto para la versión de firmware de su dispositivo.
- Elija TCP o UDP según su instalación y red; ambos transportes son compatibles, aunque comportamientos como reintentos y estado de sesión difieren.
- Use AT&W o el comando de guardado del proveedor para persistir los ajustes; los parámetros no guardados pueden perderse tras un ciclo de alimentación.
- Los comandos de ejemplo incluyen líneas comentadas de los ejemplos del proveedor; descomente o adapte únicamente las reglas que necesite para su instalación.
- Confirme los detalles de APN y credenciales con su operador celular y pruebe la conectividad antes de depender del monitoreo en producción.

## Por qué usar Plaspy con esta configuración

Usar el SkyPatrol TT 8750+ con Plaspy ofrece a las organizaciones una forma sencilla de centralizar datos GPS y eventos de un rastreador fiable en una única plataforma. Con los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo, integrar el TT 8750+ suele ser cuestión de aplicar parámetros de APN y servidor y configurar las reglas de reporte del dispositivo.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos del dispositivo, notas de firmware y orientación de instalación, verifique la documentación oficial de SkyPatrol en https://www.skypatrol.com/ antes del despliegue final.
