---
slug: /istartek/pt23/configuration
id: pt23-configuration
sidebar_label: Configuration
title: iStartek - PT23 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar iStartek PT23 con Plaspy, incluye comandos SMS y ajustes de servidor
keywords:
  - configuración iStartek PT23
  - configuración PT23 para Plaspy
  - configuración servidor iStartek PT23
  - configuración rastreador GPS PT23
  - comandos SMS iStartek PT23
  - integración rastreador Plaspy
  - configuración APN PT23
  - configuración GPS reloj infantil
  - configuración plataforma seguimiento PT23
  - dispositivos compatibles Plaspy
---

# iStartek - PT23 — Configuración

Esta página documenta el contexto público de configuración para usar el iStartek PT23 con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS publicados por el fabricante, de modo que los integradores puedan preparar el dispositivo para enviar ubicación y estado a Plaspy para supervisión y reproducción histórica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT23 admite comandos de configuración por SMS que se usan comúnmente para establecer APN, servidor y el intervalo de reporte; utilice esta guía junto con la documentación de iStartek al aplicar los ajustes.

## Resumen de la configuración

Configurar el PT23 para Plaspy implica preparar el reloj para que envíe mensajes de ubicación y estado al endpoint compartido de Plaspy, de modo que el dispositivo aparezca y se actualice correctamente en la plataforma. Los comandos públicos que proporciona iStartek permiten la configuración por SMS de zona horaria, APN, servidor y temporizador de reporte.

- Configure el APN del dispositivo para que pueda conectarse a la red de datos móviles y usar GPRS para enviar reportes.
- Apunte el dispositivo a Plaspy configurando la dirección del servidor por dominio o IP y el puerto compartido de Plaspy.
- Establezca un intervalo de reporte razonable para equilibrar la frecuencia de actualizaciones y la duración de la batería.
- Verifique los ajustes con el comando de consulta de parámetros del dispositivo y confirme que el dispositivo aparece en Plaspy.
- Mantenga a la mano el firmware y las instrucciones del fabricante, ya que la sintaxis y el comportamiento de los comandos pueden variar según la revisión.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos transportes en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto para la ingestión de datos

## Requisitos típicos antes de la configuración

- Un dispositivo PT23 cargado con batería suficiente o conectado a alimentación para realizar los pasos de configuración
- Una tarjeta SIM válida instalada y activa con capacidad de datos o SMS y la información de APN correcta
- Acceso al método de configuración oficial de iStartek, como comandos SMS o una herramienta del vendedor
- El APN, nombre de usuario y contraseña del operador móvil si la SIM los requiere
- Un teléfono capaz de enviar SMS al PT23 por parte del propietario o administrador del dispositivo
- Documentación del fabricante para la versión de firmware del dispositivo para confirmar la sintaxis de los comandos

## Cómo se conecta este rastreador a Plaspy

El PT23 se configura para enviar ubicación y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar mapas en tiempo real, alertas y rutas históricas. La configuración normalmente se realiza enviando comandos SMS desde un teléfono de administración o usando herramientas del proveedor cuando están disponibles.

- El dispositivo envía mensajes de ubicación y estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Los reportes pueden transmitirse por TCP o UDP según la configuración del dispositivo y las condiciones de la red
- Plaspy ingiere esos mensajes y detecta automáticamente el protocolo del rastreador para su decodificación
- Las actualizaciones periódicas de posición se controlan con el ajuste TIMER del dispositivo, lo que permite ajustar la frecuencia y el consumo de batería
- Es posible verificar la configuración usando la consulta de parámetros del dispositivo para confirmar servidor y APN

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de iStartek o al software correspondiente, o prepare un teléfono autorizado para enviar comandos SMS al dispositivo.
2. Configure el APN del dispositivo usando el comando SMS APN para que el rastreador pueda usar datos móviles para reportes.
3. Ingrese el endpoint de Plaspy enviando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 al dispositivo.
4. Establezca el puerto en 8888 como requiere Plaspy y elija UDP o TCP si el rastreador solicita selección de transporte.
5. Aplique y guarde la configuración en el dispositivo siguiendo el flujo de comandos SMS del fabricante o las instrucciones de la herramienta.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio tras la configuración.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones en vivo.

## Ejemplos de comandos de configuración

El PT23 acepta comandos SMS para su configuración. Los siguientes comandos son publicados por iStartek y están pensados para enviarse como mensajes SMS al dispositivo en el orden indicado para una configuración inicial.

- Reinicio opcional a valores de fábrica (solo cuando sea necesario):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0:
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Nota: {{apn}} es el nombre del punto de acceso del operador. {{apnu}} y {{apnp}} son el nombre de usuario y la contraseña del APN, opcionales; inclúyalos solo si su operador los requiere.

- Establecer el servidor GPRS por dominio y puerto (opción legible preferida):
```text
SERVER,1,d.plaspy.com,8888#
```

- O establecer el servidor GPRS por IP y puerto:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización a 60 segundos:
```text
TIMER,60#
```

- Verificar los parámetros actuales del dispositivo:
```text
PARAM#
```

Mantenga el orden de los comandos cuando sea requerido por su despliegue. Los ejemplos del comando SERVER muestran alternativas por dominio e IP; elija la que mejor se adapte a su operador y comportamiento del dispositivo. Si su firmware expone una selección de transporte separada para UDP o TCP, ajuste ese transporte para que coincida con sus necesidades de red manteniendo el puerto 8888.

## Notas de configuración

- La configuración por SMS es compatible y se usa comúnmente para el ajuste del PT23; siga la sintaxis exacta de comandos que iStartek proporciona para su versión de firmware.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar el comportamiento de los comandos o las opciones disponibles; consulte el manual del dispositivo según el firmware de su unidad.
- Use el comando SERVER,1,d.plaspy.com,8888# para apuntar al dominio de Plaspy o el comando SERVER,0,54.85.159.138,8888# para apuntar por IP; ambos dirigen a Plaspy en el puerto 8888.
- Elija el transporte UDP o TCP si el firmware del rastreador requiere selección explícita; Plaspy admite ambos y detectará el protocolo automáticamente.
- Preserve los marcadores de APN exactamente y reemplácelos por los valores del operador al configurar el dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el PT23 con Plaspy ofrece una forma sencilla de añadir localización en tiempo real, alertas y reproducción de rutas históricas a sus flujos de monitoreo. Para organizaciones y familias que necesitan visibilidad fiable y conciencia situacional, configurar el dispositivo para que reporte a Plaspy centraliza eventos SOS, alertas de geocerca y actualizaciones rutinarias de posición.

Para saber más sobre Plaspy y cómo puede ingerir y presentar la telemetría del PT23 visite https://www.plaspy.com. Para la sintaxis más reciente de comandos específicos del dispositivo, notas de firmware y orientación del fabricante, verifique los detalles en el sitio de iStartek https://istartek.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
