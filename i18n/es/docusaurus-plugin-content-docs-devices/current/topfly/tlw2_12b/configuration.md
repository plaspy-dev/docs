---
slug: /topfly/tlw2_12b/configuration
id: tlw2_12b-configuration
sidebar_label: Configuration
title: TopFly - TLW2-12B Configuration
sidebar_class_name: menu_item_tracker
description: Guía completa para configurar el TopFly TLW2-12B con Plaspy, incluyendo ajustes de servidor, comandos SMS y lista de verificación
keywords:
  - Configuración TopFly TLW2-12B
  - Configuración TLW2-12B
  - Configuración TLW2-12B Plaspy
  - Configuración rastreador GPS TopFly
  - Configuración rastreador GPS trailer
  - Configuración dispositivo Plaspy
  - Configuración seguimiento de flotas
  - Comandos configuración TLW2
  - Ajustes servidor TopFly TLW2
  - Configuración SMS rastreador GPS
---

# TopFly - Configuración TLW2-12B

Esta página documenta el contexto público de configuración para usar el rastreador TopFly TLW2-12B con Plaspy. Resume los pasos prácticos, los ajustes de servidor y comandos de ejemplo que se usan habitualmente para preparar el dispositivo y que pueda reportar a Plaspy. Utilice esta guía para comprender los ajustes compartidos de Plaspy y el flujo de trabajo recomendado antes de realizar una integración de dispositivo.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que verifique los detalles finales con el vendedor del dispositivo y la documentación actual del producto al aplicar estos ajustes públicos.

## Resumen de la configuración

Este proceso prepara el TLW2-12B para enviar ubicación y telemetría a Plaspy y verifica que el dispositivo pueda alcanzar la plataforma de forma confiable. Los comandos públicos disponibles para el TLW2-12B suelen enviarse por SMS e incluyen ajustes de APN, servidor y período de reporte.

- Configure el APN y las credenciales del operador para que el dispositivo use la red celular para datos.
- Apunte el rastreador a Plaspy usando el endpoint y puerto compartidos para que pueda registrarse en Plaspy.
- Seleccione el transporte UDP o TCP en el rastreador si el firmware exige elegir uno para coincidir con el soporte de Plaspy.
- Defina los intervalos de reporte y el comportamiento de almacenamiento en búfer para que Plaspy reciba la frecuencia de actualizaciones esperada.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy después de la configuración.

## Ajustes de servidor de Plaspy

- El dominio del servidor d.plaspy.com está disponible como el nombre canónico del servidor de Plaspy.
- La IP del servidor 54.85.159.138 puede usarse donde se requiera una dirección numérica.
- El puerto 8888 es el puerto compartido que usa Plaspy para conexiones de dispositivos.
- Se admite transporte UDP o TCP; el dispositivo puede configurarse usando cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, así que la plataforma no requiere seleccionar un protocolo específico, aunque el firmware del rastreador puede solicitar elegir UDP o TCP.

## Requisitos típicos antes de la configuración

- Un TLW2-12B cargado y accesible con alimentación conectada o con carga suficiente en la batería interna.
- Una SIM activa con servicio de datos y capacidad de SMS instalada en el dispositivo cuando sea necesario.
- Acceso al método oficial de configuración de TopFly, como comandos SMS, aplicación del proveedor o herramienta de configuración.
- Documentación del fabricante o notas de la versión del firmware del dispositivo que está configurando.
- Conocimiento del APN correcto, usuario APN y contraseña APN para el operador de la SIM.
- Un dispositivo de prueba o un entorno de staging para validar el reporte a Plaspy antes del despliegue masivo.

## Cómo se conecta este rastreador a Plaspy

El TLW2-12B se configura para reportar su ubicación y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera datos, muestre la ubicación en tiempo real y dispare alertas. Cuando la cobertura se interrumpe, los puntos almacenados en búfer se suben cuando vuelve la conectividad, de modo que las trayectorias históricas permanecen intactas.

- El dispositivo envía posición y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- En el dispositivo se puede seleccionar UDP o TCP como transporte; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador al establecerse la conexión.
- Los datos en búfer se cargan tras la reconexión para que Plaspy pueda reconstruir el historial de viajes.
- Lecturas de sensores BLE y telemetría local se reenvían a Plaspy según lo permita el firmware y la configuración del dispositivo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de TopFly, ya sea mediante comandos SMS, la app del proveedor o la herramienta de configuración descrita en la documentación de TopFly.
2. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo exige seleccionar un transporte para su uplink de datos.
5. Configure el APN y otros parámetros del operador para que el rastreador pueda usar datos celulares y SMS si es necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware requiere reboot para aplicar cambios.
7. Valide que el rastreador reporte a Plaspy comprobando la visibilidad del dispositivo y la telemetría reciente en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El TLW2-12B acepta comandos de configuración por SMS en el siguiente formato de ejemplo público. El ejemplo usa la contraseña por defecto del dispositivo 0000 según la guía pública de TopFly. Conserve los marcadores de posición al reemplazar valores por los de su SIM y operador.

- Nota sobre la contraseña por defecto
  - Los comandos de ejemplo a continuación usan la contraseña por defecto del dispositivo 0000. Cambie las contraseñas conforme a la documentación de TopFly después de la configuración inicial si es necesario.

- Establecer zona horaria a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador
```
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
  - {{apn}} es el APN de su operador de SIM.
  - {{apnu}} es el usuario APN cuando el operador lo requiere; deje en blanco si no se usa.
  - {{apnp}} es la contraseña APN cuando el operador la requiere; deje en blanco si no se usa.

- Establecer el servidor GPRS a Plaspy por IP y puerto
```
IP,0000,54.85.159.138 8888#
```
  - También puede usar el dominio d.plaspy.com cuando el dispositivo acepta una cadena de dominio para la configuración del servidor.

- Configurar el intervalo de actualización a 60 segundos
```
TIMER,0000,60:60:0:0#
```
  - Este ejemplo configura los intervalos de reporte y puede variar según el firmware. Reemplace los valores de tiempo según su política de reporte.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los SMS y los comandos disponibles. Confirme la sintaxis con el manual del TopFly TLW2-12B para la versión de firmware correspondiente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero muchos rastreadores aún requieren que elija UDP o TCP en los ajustes del dispositivo.
- El dispositivo admite configuración mediante SMS en ejemplos públicos; si prefiere una herramienta de configuración del proveedor o un flujo de aprovisionamiento, siga la orientación de TopFly.
- Verifique las credenciales del APN con su operador de SIM antes de configurar el rastreador para evitar demoras en la conectividad.
- Tras la configuración inicial, confirme el comportamiento del búfer y la cadencia de reporte en Plaspy para asegurarse de que el dispositivo cumpla los requisitos operativos.

## Por qué usar Plaspy con esta configuración

Usar el TLW2-12B con Plaspy proporciona a flotas y gestores de activos visibilidad continua del movimiento de remolques y activos, telemetría ambiental y alertas basadas en eventos. El comportamiento de almacenamiento en búfer del dispositivo y las opciones de reporte frecuente, combinadas con la detección automática de protocolo de Plaspy, facilitan la incorporación de la telemetría a paneles y flujos de trabajo automatizados.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information on the official TopFly site https://www.topflytech.com/.
