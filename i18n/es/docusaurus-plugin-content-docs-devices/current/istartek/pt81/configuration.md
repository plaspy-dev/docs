---
slug: /istartek/pt81/configuration
id: pt81-configuration
sidebar_label: Configuration
title: iStartek - PT81 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek PT81 con Plaspy, incluye comandos SMS y ajustes de servidor necesarios
keywords:
  - configuración iStartek PT81
  - configuración PT81 para Plaspy
  - configuración servidor PT81
  - configuración de rastreo iStartek PT81
  - configuración de rastreador compatible Plaspy
  - configuración SMS PT81
  - APN y ajustes de servidor PT81
  - configuración de rastreador personal
  - configuración de rastreador portátil GPS
  - integración de dispositivo Plaspy
---

# iStartek - Configuración del PT81

Esta página documenta el contexto público de configuración para usar el rastreador iStartek PT81 con la plataforma Plaspy. Describe los valores del servidor Plaspy que debe establecer en el dispositivo, muestra los comandos SMS más utilizados publicados para el PT81 y explica los pasos prácticos para dejar el equipo listo y que reporte a Plaspy para seguimiento en tiempo real y alertas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador al recibir datos. Los métodos de configuración del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que utilice esta guía junto con la documentación oficial de iStartek y las notas de su firmware.

## Resumen de la configuración

Esta configuración prepara el PT81 para comunicarse con Plaspy asignando el endpoint de servidor correcto, la opción de transporte, el APN para datos celulares y el intervalo de reporte. El objetivo es asegurar que el rastreador envíe datos de ubicación y eventos de alerta de forma confiable a la plataforma Plaspy para que el dispositivo sea visible en su cuenta.

- Configure el PT81 para apuntar al endpoint y puerto del servidor Plaspy para que los datos se enruten a su cuenta.
- Establezca el APN del dispositivo y cualquier autenticación de SIM requerida para que GPRS y los comandos SMS funcionen correctamente.
- Elija UDP o TCP en el puerto 8888 si el dispositivo requiere una selección de transporte; Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo.
- Defina un intervalo de reporte adecuado para equilibrar la actualización oportuna y la duración de la batería.
- Verifique la configuración con la comprobación de parámetros del dispositivo y confirme que el equipo aparece en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos antes de la instalación

- Un PT81 con batería cargada, conectividad celular operativa y una SIM que admita datos y SMS.
- Datos del APN del operador móvil para habilitar GPRS; usuario y contraseña si el operador lo requiere.
- Acceso al método oficial de configuración iStartek para el PT81 (comandos SMS como se muestran más abajo u otras herramientas del fabricante).
- Capacidad para enviar comandos SMS al dispositivo y recibir respuestas SMS para verificación.
- Una cuenta en Plaspy y conocimiento de cómo se agregan dispositivos a la plataforma Plaspy para su monitoreo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el PT81 reporta ubicación, estado y eventos de alerta al endpoint y puerto compartidos de Plaspy para que la plataforma muestre seguimiento en tiempo real, alertas e historial. Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar UDP o TCP en el mismo puerto.

- El rastreador envía actualizaciones periódicas de posición a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888.
- Informes de eventos como SOS, activación de geocercas y alertas de batería se reenvían a Plaspy para notificaciones y reproducción en la línea de tiempo.
- Funciones de voz y SOS en el dispositivo se gestionan a nivel de la plataforma una vez establecida la ruta de datos y eventos.
- Plaspy procesa el protocolo entrante y asigna el dispositivo a su cuenta para visibilidad, monitoreo y trazados históricos.

## Flujo común de configuración

1. Acceda al método de configuración oficial del iStartek PT81, normalmente la interfaz de comandos SMS documentada o una herramienta del proveedor.
2. Inserte una SIM funcional en el dispositivo y complete los ajustes de APN para su operador.
3. Ingrese el endpoint del servidor Plaspy configurando d.plaspy.com o la IP del servidor 54.85.159.138.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y realice el reinicio requerido, si aplica.
6. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta o vista de la plataforma.
7. Ajuste los intervalos de actualización y las alertas según sea necesario para equilibrar precisión y duración de la batería.

## Ejemplos de comandos de configuración

El PT81 admite comandos de configuración por SMS. Los comandos que siguen son los publicados de forma pública y deben enviarse al dispositivo por SMS en el orden indicado cuando el orden sea relevante.

- Restablecimiento de fábrica opcional (usar solo si necesita restaurar valores por defecto):
```text
FACTORY#
```

- Establecer la zona horaria a UTC cero:
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores según sea necesario:
```text
APN,{{apn}}[,{{apnu}},{{apnp}}]#
```
Explicación de los marcadores:
- {{apn}} es el nombre del punto de acceso del operador móvil.
- {{apnu}} es el usuario del APN si el operador lo requiere.
- {{apnp}} es la contraseña del APN si el operador lo requiere.

- Configurar el servidor GPRS para usar el dominio de Plaspy (forma con dominio):
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP del servidor Plaspy directamente:
```text
SERVER,0,54.85.159.138,8888#
```
Nota: Plaspy usa el puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El dispositivo puede aceptar la forma con dominio o con IP según el firmware.

- Establecer el intervalo de reporte a cada 60 segundos:
```text
TIMER,60#
```

- Comprobar los parámetros actuales:
```text
PARAM#
```

Envíe cada comando como un SMS separado al PT81. La sintaxis exacta de los SMS y los prefijos de comando se basan en contenido público de configuración del PT81; consulte las notas del firmware del dispositivo si la sintaxis difiere.

## Notas de configuración

- La configuración vía SMS es un método público soportado para el PT81 como se muestra arriba; también pueden existir otras herramientas del fabricante.
- Las versiones de firmware y las revisiones de hardware pueden cambiar el comportamiento de los comandos o las opciones disponibles; verifique los comandos según la versión de su dispositivo.
- Elija UDP o TCP según las opciones del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente en el puerto 8888, pero en algunos despliegues puede preferirse un transporte por razones de red o firewall.
- Conserve los marcadores de APN intactos cuando prepare los comandos; proporcione el APN, usuario y contraseña de su operador solo cuando sea necesario.
- Después de aplicar los ajustes, utilice el comando PARAM# o las respuestas del dispositivo para confirmar los valores antes de poner el equipo en campo.

## Por qué usar Plaspy con esta configuración

Usar el PT81 con Plaspy brinda a cuidadores y gestores acceso confiable a ubicación en tiempo real, alertas y recorridos históricos en una sola plataforma. El diseño portátil del PT81 y sus funciones de seguridad, junto con la ingestión de datos y alertas por parte de Plaspy, ayudan a las organizaciones a mantener consciencia situacional y a responder con mayor rapidez ante eventos SOS o notificaciones basadas en ubicación.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos compatibles, visite https://www.plaspy.com. Para detalles específicos de configuración, notas de firmware y la documentación completa del PT81, verifique la información en el sitio del fabricante https://istartek.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
