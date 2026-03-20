---
slug: /winrich/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: Winrich - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Winrich TK102 y reportar a Plaspy mediante GPRS y comandos SMS
keywords:
  - Configuración Winrich TK102
  - Instalación Winrich TK102
  - Configuración TK102 para Plaspy
  - Configuración rastreador GPS TK102
  - Ajustes de servidor Winrich TK102
  - Comandos SMS TK102
  - Configuración GPRS TK102
  - Rastreador Winrich Plaspy
  - Rastreo vehicular TK102
  - Configuración plataforma GPS
---

# Winrich - Configuración del TK102

Esta página recoge el contexto público de configuración para usar el rastreador Winrich TK102 (TK102B) con la plataforma Plaspy. Contiene los ajustes de servidor y los comandos SMS de uso habitual para la familia TK102, y explica cómo aplicar esas configuraciones para que el dispositivo reporte a Plaspy.

Plaspy ofrece un endpoint y puerto compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; utilice los comandos SMS y la secuencia mostrada aquí como referencia práctica y contraste siempre con la documentación del fabricante para detalles específicos del dispositivo.

## Visión general de la configuración

El objetivo de esta configuración es preparar el TK102 para que envíe de forma fiable datos de ubicación y estado a Plaspy, verificar la conectividad y hacer que el dispositivo sea visible en la plataforma. Para el TK102 esto suele implicar configurar por SMS el APN y el destino de reporte GPRS, además de un intervalo de envío adecuado a su caso de uso.

- Configurar el APN del equipo para permitir conectividad de datos GPRS y envío de paquetes.
- Establecer el servidor GPRS y el puerto para que el TK102 envíe información al endpoint compartido de Plaspy.
- Ajustar el intervalo de actualización de posición para equilibrar frescura de datos y consumo.
- Opcionalmente realizar un reinicio de fábrica o ajustar la zona horaria antes de la configuración principal para partir de una base consistente.
- Verificar la configuración y el estado en tiempo real mediante los comandos de verificación por SMS proporcionados.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el TK102 para reportes:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP (elija el que requiera el equipo)
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo para simplificar la configuración.

## Requisitos habituales antes de configurar

- Un equipo TK102 con alimentación y funcionamiento correcto, con acceso para enviar comandos SMS o mediante la herramienta de configuración oficial.
- Una tarjeta SIM activa con capacidad para SMS y datos GPRS, y con la información del APN del suscriptor a mano.
- Un teléfono con capacidad para enviar SMS o una herramienta de configuración para mandar los comandos mostrados más abajo.
- Información básica como el APN correcto y, opcionalmente, el usuario y la contraseña del APN según el operador.
- Acceso a la documentación oficial de Winrich o a las herramientas del instalador para referencia.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK102 establece conectividad GPRS y reporta su ubicación y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe e interpreta los mensajes entrantes mediante detección automática de protocolo, de modo que el dispositivo puede aparecer en la plataforma sin necesidad de cambiar puertos por dispositivo.

- El rastreador se configura con una dirección de servidor GPRS que apunta a Plaspy (IP o dominio).
- El equipo envía actualizaciones de posición al endpoint de Plaspy en el intervalo configurado.
- Si la localización GPS no está disponible, el TK102 puede recurrir a posicionamiento por GSM para seguir reportando.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los paquetes entrantes en el puerto compartido.
- El transporte (UDP o TCP) se selecciona en el dispositivo si el firmware lo requiere.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial Winrich para su TK102 (comandos SMS o la herramienta del proveedor) y confirme que el equipo está encendido y tiene una SIM operativa.
2. Opcionalmente haga un reinicio de fábrica para comenzar desde un estado conocido.
3. Ingrese el APN del operador y las credenciales del APN si la SIM lo exige.
4. Configure la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto 8888.
5. Seleccione UDP o TCP en el equipo si el dispositivo requiere elegir el transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy usando los comandos de verificación y confirme la visibilidad en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El Winrich TK102 acepta comandos SMS para la configuración. A continuación están los comandos SMS comúnmente publicados y el orden en que suelen aplicarse. Mantenga los marcadores [apn], [apnu] y [apnp] tal como se muestran y reemplácelos por los valores de su operador.

- Reinicio de fábrica (paso inicial opcional):
```text
940#
```

- Ajustar la zona horaria a UTC 0:
```text
801#W0#
```

- Configurar el APN del operador. Reemplace los marcadores por los valores de su operador. El usuario y la contraseña del APN son opcionales y solo se requieren en algunos operadores:
```text
802#[apn]#[apnu]#[apnp]#
```
Explicación de marcadores:
- [apn] = APN de su operador móvil
- [apnu] = nombre de usuario del APN si el operador lo requiere
- [apnp] = contraseña del APN si el operador la requiere

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto indicados en esta guía:
```text
803#54.85.159.138#8888#
```
Si su dispositivo admite nombres de dominio en lugar de IP puede usar:
```text
803#d.plaspy.com#8888#
```
(Use el formato que acepte su firmware.)

- Configurar el intervalo de actualización de posición a 60 segundos:
```text
730#60#
```

- Comandos de verificación:
```text
886#
```
(Use esto para comprobar los ajustes configurados.)

```text
902#
```
(Use esto para solicitar el estado del dispositivo.)

Siga el orden de comandos anterior cuando el orden sea importante. Envíe cada SMS desde el número autorizado del dispositivo según el método de autorización del fabricante.

## Notas de configuración

- La configuración por SMS es el método público mostrado aquí; algunas variantes o revisiones de firmware pueden admitir además herramientas USB o software del proveedor.
- Mantenga exactamente los marcadores [apn], [apnu] y [apnp] como campos de plantilla al preparar los comandos; reemplácelos por los valores del operador al enviar.
- Algunos firmwares aceptan nombres de dominio y otros requieren una dirección IP; utilice el formato que soporte su dispositivo y firmware.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que los únicos valores obligatorios del destino de servidor son el dominio o la IP y el puerto 8888.
- Si su dispositivo permite elegir entre UDP o TCP, pruebe el transporte que ofrezca entrega de paquetes más fiable según las condiciones de su red.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Winrich TK102 permite a las organizaciones consolidar el reporte GPS de múltiples modelos de rastreadores mediante un endpoint y un puerto compartidos. Eso simplifica el despliegue y la gestión continua, ya que Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes para ofrecer visibilidad de ubicación, monitoreo de eventos y supervisión operativa.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los pasos de configuración más actuales por dispositivo, notas de firmware y detalles del fabricante, verifique la información más reciente en el sitio de Winrich http://www.winrichgroup.com/en/.
