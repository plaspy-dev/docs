---
slug: /v_sun/v_580/configuration
id: v_580-configuration
sidebar_label: Configuration
title: V-SUN - V-580 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN V-580 con ajustes de servidor Plaspy y comandos SMS para su puesta en marcha
keywords:
  - Configuración V-SUN V-580
  - Puesta en marcha V-SUN V-580
  - Configuración rastreador GPS V-SUN
  - Configuración servidor V-SUN V-580
  - Configuración software de rastreo V-SUN
  - Configuración rastreador Plaspy
  - Configuración dispositivo Plaspy
  - Configuración plataforma GPS V-SUN
  - Configuración dispositivo rastreo infantil
  - Configuración SMS V-580
---

# V-SUN - Configuración del V-580

Esta página documenta el contexto público de configuración para usar el dispositivo de rastreo infantil V-SUN V-580 con Plaspy. Reúne los ajustes prácticos y públicamente disponibles, así como ejemplos de comandos SMS que se usan para apuntar el equipo a la plataforma Plaspy, de modo que pueda preparar el rastreador y hacerlo visible en su cuenta Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El V-580 admite configuración por SMS y ajustes GPRS en su conjunto público de comandos; esta guía incluye esos ejemplos y explica cómo aplicar los valores requeridos por Plaspy.

## Resumen de la configuración

Este proceso prepara el V-580 para enviar datos de ubicación y estado a Plaspy, configurando el APN y el servidor GPRS del dispositivo, activando GPRS e informes GPS y seleccionando el protocolo de transporte. Los comandos de muestra incluidos abajo se envían por SMS al dispositivo y usan la contraseña por defecto del equipo cuando se indica.

- Configure el APN del dispositivo para que use datos móviles para el envío de reportes
- Establezca el endpoint del servidor GPRS para apuntar a Plaspy
- Habilite los modos de reporte GPRS y GPS para que el rastreador transmita datos
- Aplique intervalos de reporte para controlar la frecuencia de actualizaciones
- Verifique que el dispositivo aparezca y reporte correctamente en Plaspy

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte disponible por UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Un V-SUN V-580 encendido y funcional con capacidad SMS y GPRS
- Una tarjeta SIM activa con datos y SMS habilitados y credenciales APN correctas
- Conocer la contraseña SMS por defecto del dispositivo, que en los ejemplos es 0000
- Un teléfono móvil capaz de enviar comandos SMS al rastreador para la configuración
- Acceso a la documentación del fabricante o a la herramienta de instalador para instrucciones específicas de firmware
- Una cuenta Plaspy o acceso a la plataforma Plaspy para verificar los reportes del dispositivo

## Cómo se conecta este rastreador a Plaspy

El V-580 se configura para reportar ubicación y estado al endpoint compartido del servidor y al puerto de Plaspy. Una vez aplicados el APN y los ajustes de servidor, el dispositivo usa datos móviles para enviar mensajes a d.plaspy.com o a la dirección numérica del servidor en el puerto 8888 mediante el transporte elegido. Plaspy recibe esos mensajes y detecta automáticamente el protocolo usado por el rastreador, por lo que no es necesaria una selección manual de protocolo en la plataforma.

- El dispositivo usa las credenciales APN configuradas para establecer conectividad GPRS
- Los mensajes GPRS se envían a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP en el dispositivo si así lo requiere
- Plaspy detecta el protocolo del rastreador automáticamente y procesa los datos entrantes
- Un reporte exitoso se traduce en visibilidad y rastreo dentro de Plaspy

## Flujo típico de configuración

1. Use el método oficial de configuración V-SUN o el software correspondiente, normalmente enviando comandos SMS según la documentación del fabricante
2. Ingrese el host del servidor Plaspy estableciendo d.plaspy.com o 54.85.159.138 en el dispositivo
3. Configure el puerto del servidor en 8888 según requiere Plaspy
4. Seleccione el transporte UDP o TCP en el dispositivo si éste exige elegir un transporte
5. Aplique o guarde la configuración en el equipo; para SMS esto implica enviar los comandos correctos
6. Reinicie o apague y encienda el rastreador si el dispositivo lo requiere después de aplicar los ajustes
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece y envía actualizaciones a la plataforma

## Comandos de ejemplo para la configuración

El V-580 puede configurarse mediante comandos SMS enviados al dispositivo. Los comandos de ejemplo a continuación se extraen de contenido público de configuración. La contraseña por defecto usada en estos ejemplos es 0000. Reemplace los marcadores como {{apn}}, {{apnu}} y {{apnp}} por el APN de su operador, el nombre de usuario y la contraseña del APN según sea necesario.

- Reinicio de fábrica opcional antes de la configuración inicial
  ```
  *RESET#0000##
  ```

- Establecer el APN del operador
  ```
  #803#0000#{{apn}}#{{apnu}}#{{apnp}}##
  ```
  - Explicación: Reemplace {{apn}} por el APN de su operador. Incluya {{apnu}} y {{apnp}} solo si su proveedor requiere usuario o contraseña de APN.

- Establecer el servidor GPRS al IP y puerto de Plaspy
  ```
  #804#0000#54.85.159.138#8888##
  ```
  - Alternativa: algunas configuraciones aceptan el dominio del servidor en lugar de la IP numérica. Puede usar d.plaspy.com cuando el dispositivo soporte nombres de dominio.

- Establecer el intervalo de actualización en movimiento (valor de ejemplo del contenido público)
  ```
  #805#0000#120#1##
  ```
  - Explicación: Este ejemplo configura un intervalo de reporte según el muestreo público. Ajuste los intervalos según sus necesidades y la capacidad del dispositivo.

- Establecer el intervalo de actualización en reposo (valor de ejemplo del contenido público)
  ```
  #809#0000#120#1##
  ```

- Habilitar modo de reporte GPRS
  ```
  7100000
  ```

- Activar modo GPS
  ```
  2220000
  ```

Nota: Respete el orden al aplicar comandos si el fabricante lo recomienda. Si su dispositivo acepta nombres de dominio para el servidor, puede usar d.plaspy.com en lugar de la IP numérica. Confirme siempre la sintaxis exacta de los comandos con la documentación del dispositivo para su versión de firmware.

## Notas sobre la configuración

- Muchos pasos de configuración del V-580 en ejemplos públicos se realizan por SMS; confirme si su firmware admite comandos SMS o si existe una herramienta alternativa de configuración
- Las revisiones de firmware y las variantes de hardware pueden cambiar los comandos disponibles y su comportamiento, por lo que debe verificar la sintaxis exacta con el fabricante
- Elija UDP o TCP según el soporte del dispositivo y las consideraciones de red; Plaspy soporta ambos y detecta el protocolo automáticamente al recibir datos
- Mantenga segura la información de la contraseña por defecto y cámbiela si el dispositivo permite actualizarla
- Las credenciales APN son específicas del operador y deben ingresarse correctamente para que el reporte GPRS funcione

## Por qué usar Plaspy con esta configuración

Usar el V-SUN V-580 con Plaspy brinda a organizaciones y padres una vista centralizada de la ubicación y los eventos del dispositivo mediante una única configuración de servidor compartido. Al apuntar el rastreador a d.plaspy.com o 54.85.159.138 en el puerto 8888 y habilitar GPRS, el dispositivo puede transmitir actualizaciones de ubicación que Plaspy procesa automáticamente, ofreciéndole visibilidad y la posibilidad de monitorear llegadas, salidas y eventos SOS desde la plataforma.

Para saber más sobre Plaspy y cómo gestiona las conexiones de los dispositivos visite https://www.plaspy.com. Para obtener los comandos específicos más actuales, notas de firmware y guía del fabricante, verifique la información en el sitio de V-SUN http://www.v-sun.cc/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
