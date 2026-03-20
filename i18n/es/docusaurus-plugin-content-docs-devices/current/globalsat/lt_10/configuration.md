---
slug: /globalsat/lt_10/configuration
id: lt_10-configuration
sidebar_label: Configuration
title: GlobalSat - LT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Configure GlobalSat LT-10 para usar con Plaspy ajustes de servidor comandos SMS checksum y flujo de configuración
keywords:
  - Configuración GlobalSat LT-10
  - Configuración LT-10 para Plaspy
  - Configuración del rastreador GlobalSat
  - Configuración de servidor LT-10
  - Configuración de rastreadores Plaspy
  - Configuración de rastreo GPS para ganado
  - Configuración LoRaWAN para aretes
  - Comandos SMS de configuración LT-10
  - Guía de configuración de rastreador GNSS
  - Configuración de rastreador con energía solar
---

# GlobalSat - LT-10 Configuración

Esta página describe el contexto público de configuración para usar el GlobalSat LT-10 con Plaspy. Explica los pasos prácticos y los comandos públicos que permiten apuntar un LT-10 al endpoint y puerto del servidor de Plaspy para que el dispositivo reporte ubicación y estado en la plataforma. La información se basa en la descripción del LT-10 y en los comandos de configuración públicos disponibles.

Plaspy usa ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El LT-10 puede configurarse mediante la app del fabricante o mediante comandos de configuración por estilo SMS que están documentados públicamente; utilice el método que coincida con el firmware de su dispositivo y las herramientas disponibles.

## Resumen de la configuración

El objetivo del proceso es preparar el LT-10 para que se comunique de forma fiable con Plaspy y aparezca en la plataforma para monitoreo y reportes. En el caso del LT-10, esto suele implicar usar la app del fabricante o enviar cadenas de configuración por SMS documentadas públicamente que establecen el destino del servidor, el transporte y los parámetros necesarios del servicio.

- Configure el LT-10 para que envíe sus datos al endpoint del servidor de Plaspy y así Plaspy pueda recibir y mostrar las ubicaciones.
- Proporcione los parámetros de red necesarios y marcadores como el APN o el IMEI cuando el comando los requiera.
- Elija transporte UDP o TCP y configure el puerto común de Plaspy para que el tráfico del dispositivo llegue al destino correcto.
- Aplique la configuración y, si es necesario, reinicie el dispositivo para activar los ajustes.
- Verifique la conectividad confirmando que el dispositivo se registra y reporta en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el LT-10:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888 — todos los dispositivos en Plaspy usan el mismo puerto 8888
- soporte de transporte UDP o TCP según los requisitos del dispositivo
- detección automática de protocolo en Plaspy para que la plataforma reconozca el protocolo del rastreador después de que el dispositivo se conecte

## Requisitos típicos antes de la configuración

- Un dispositivo LT-10 con energía y acceso al método de configuración del fabricante, ya sea la app para iOS/Android o el canal de configuración por SMS que use el dispositivo.
- El IMEI del LT-10 o el identificador del dispositivo disponible para incluir en comandos o en el registro de la app.
- Si usa configuración por SMS, una tarjeta SIM y capacidad de SMS en el dispositivo o un gateway SMS según lo requiera el flujo de comandos del fabricante.
- Marcadores de APN o credenciales de red listos cuando el comando de configuración los solicite (se mantienen como {{apn}}, {{apnu}} y {{apnp}} en los ejemplos).
- Comprensión de que el LT-10 puede usar LoRaWAN para el seguimiento estándar y que los métodos de configuración y las opciones de transporte disponibles pueden depender del firmware y la región.
- Una cuenta de Plaspy o credenciales de acceso para confirmar que el dispositivo aparece y reporta en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando el LT-10 se configura para apuntar a Plaspy, envía su tráfico de reporte al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes del dispositivo, identifica automáticamente el protocolo y muestra el dispositivo en la plataforma para monitoreo y alertas.

- El rastreador se configura para comunicarse con el dominio del servidor Plaspy d.plaspy.com o con la IP 54.85.159.138.
- Los mensajes se envían al puerto 8888, que es el puerto común utilizado por los dispositivos soportados en Plaspy.
- El dispositivo puede utilizar transporte UDP o TCP para entregar mensajes a Plaspy según la configuración del equipo.
- Tras la conexión, Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar manualmente el protocolo en la plataforma.
- Una configuración correcta permitirá que los reportes de posición y las actualizaciones de estado aparezcan en Plaspy para el monitoreo operativo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GlobalSat que soporte su LT-10, ya sea la app para iOS/Android o el canal de configuración por SMS documentado por GlobalSat.
2. En la herramienta del fabricante introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy.
4. Seleccione UDP o TCP en el dispositivo si se le solicita elegir un modo de transporte.
5. Proporcione los marcadores de APN o las credenciales si el comando o la app las solicita, e incluya el IMEI del dispositivo cuando sea necesario.
6. Aplique o guarde la configuración en la herramienta del dispositivo y, si la documentación del equipo lo indica, reinicie o haga un reboot del dispositivo.
7. Valide que el dispositivo está reportando a Plaspy comprobando su aparición en la plataforma después de reconectar y confirmando que llegan mensajes periódicos de ubicación o estado.

## Ejemplos de comandos de configuración

El flujo público de configuración del LT-10 incluye comandos tipo SMS. Los siguientes ejemplos se derivan de las cadenas de comandos públicas del fabricante y mantienen los marcadores de posición que debe reemplazar.

Formato de ejemplo usado por Plaspy:
TSPRXAB27GHKLMnaicz*U!

Ejemplo de comando de configuración
- Reemplace {{imei}} por el IMEI del dispositivo
- Reemplace {{apn}}, {{apnu}}, {{apnp}} por su APN, nombre de usuario APN y contraseña APN cuando el dispositivo lo requiera
- {{checksum}} es la suma de verificación hexadecimal de dos caracteres calculada sobre los caracteres del comando antes del asterisco como se describe más abajo

Comando de configuración (enviar por SMS)
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Comando de reinicio (opcional, usar si el dispositivo requiere reboot para aplicar los ajustes)
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Cálculo del checksum
- El checksum se calcula como un XOR de los códigos ASCII de cada carácter en la cadena del comando antes del caracter '*'. El resultado se convierte a un valor hexadecimal de dos dígitos en mayúsculas y se coloca donde aparece {{checksum}}.
- Muchas herramientas de configuración del fabricante calculan este checksum automáticamente. Si lo calcula manualmente, asegúrese de que tenga dos caracteres en hexadécimal en mayúsculas.

Notas sobre los marcadores
- {{imei}}: número IMEI del dispositivo requerido por el formato del comando.
- {{apn}}: cadena APN para datos GPRS si el dispositivo usa datos celulares.
- {{apnu}} y {{apnp}}: nombre de usuario y contraseña del APN cuando sean necesarios.
- Mantenga el orden y la puntuación del comando exactamente como se muestran al enviar los SMS.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta del comando y los parámetros disponibles; siempre verifique la versión de firmware del LT-10 y la documentación del fabricante para detalles específicos.
- La descripción del LT-10 indica soporte para LoRaWAN y configuración por app; los comandos SMS mostrados aquí son un método público para dispositivos que aceptan cadenas de configuración por SMS y pueden no aplicarse a todos los firmwares o revisiones regionales de hardware.
- Si debe elegir entre UDP y TCP, seleccione el transporte recomendado por su instalación y por el fabricante; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Confirme que el IMEI y los valores APN sean correctos antes de enviar comandos SMS de configuración para evitar una mala configuración.
- Use la app oficial de GlobalSat o la guía de configuración interactiva cuando sea posible, y considere los comandos SMS como una alternativa cuando estén documentados por el fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat LT-10 para reportar a Plaspy le brinda una forma centralizada de monitorear ubicación, alertas de batería y eventos de movimiento, lo que facilita la gestión del ganado. El endpoint compartido y la detección automática de protocolo de Plaspy simplifican la integración porque la plataforma acepta conexiones en un puerto único y consistente y se adapta al protocolo del rastreador cuando el dispositivo se conecta.

Para conocer más sobre Plaspy visite el sitio principal https://www.plaspy.com y para detalles específicos y guías de firmware más recientes verifique la documentación oficial de GlobalSat en https://www.globalsat.com.tw/. Las especificaciones del fabricante, los métodos de configuración y el comportamiento de los dispositivos pueden cambiar con el tiempo, por lo que siempre confirme la información más reciente en el sitio oficial de GlobalSat.
