---
slug: /box/box_tracker/configuration
id: box_tracker-configuration
sidebar_label: Configuration
title: Box - Box Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Box Tracker y reportar a Plaspy con ajustes de servidor compartidos y flujo de trabajo práctico
keywords:
  - Configuración del Box Tracker
  - Guía de configuración Box Tracker
  - Instalación Box Tracker en Plaspy
  - Configuración de servidor Box Tracker
  - Configuración GPS Box Tracker
  - Integración Box Tracker
  - Configuración de dispositivo Plaspy
  - Configuración seguimiento de flota Box Tracker
  - Rastreo vehicular Box Tracker
  - Guía de instalación Box Tracker
---

# Box - Configuración del Box Tracker

Esta página documenta el contexto público de configuración para usar el Box Tracker con la plataforma Plaspy. Reúne los ajustes prácticos del lado de la plataforma que deberá introducir para apuntar el dispositivo a Plaspy y explica los pasos típicos que siguen los integradores para habilitar la visibilidad en tiempo real. Use esta guía junto con el manual técnico del fabricante al realizar la configuración del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando se conecta el Box Tracker. Los pasos exactos en el equipo del fabricante y los menús pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme comandos y procedimientos específicos con la documentación de Box cuando sea necesario.

## Resumen de la configuración

Preparar el Box Tracker para Plaspy implica configurar el dispositivo para que envíe su ubicación y telemetría al endpoint de servidor de Plaspy y verificar que los mensajes llegan y son interpretados por la plataforma. El proceso se centra en suministrar la dirección y el transporte correctos, validar la conectividad en la red móvil y confirmar que el equipo aparece en Plaspy.

- Configure el tracker para que reporte al endpoint del servidor de Plaspy y así las ubicaciones y estados se enruten a la plataforma.
- Elija el transporte adecuado (UDP o TCP) y defina el puerto compartido que usa Plaspy.
- Asegúrese de que el dispositivo tenga alimentación adecuada, la SIM/ red lista y el APN requerido para que la conexión GPRS tenga éxito.
- Valide los paquetes entrantes en Plaspy y confirme que el dispositivo es visible y reporta los eventos esperados.
- Mantenga a mano la documentación del fabricante para cualquier menú, comando o utilidad de configuración específicos del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte soportado UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta

Estos valores son los ajustes públicos y compartidos que Plaspy utiliza para los trackers soportados y son los principales datos de servidor que deberá ingresar en el Box Tracker.

## Requisitos típicos antes de la configuración

- Una unidad Box Tracker que esté alimentada y accesible para configurar o instalar.
- Tarjeta SIM activa y plan de datos móviles para que el tracker pueda abrir una sesión GPRS/TCP o GPRS/UDP.
- Acceso al método o software de configuración del fabricante utilizado para el Box Tracker (herramienta USB, portal web o utilidad de configuración).
- Conocimiento del APN correcto y de cualquier usuario o contraseña APN requerida por el operador móvil.
- Cobertura de red suficiente en el sitio de instalación para permitir que el tracker obtenga fijación GPS y establezca conectividad GPRS.
- Acceso administrativo a Plaspy para confirmar el registro del dispositivo y verificar los datos entrantes.

## Cómo se conecta este tracker a Plaspy

El Box Tracker envía actualizaciones de ubicación y telemetría del dispositivo a través de la red móvil al endpoint y puerto compartidos de Plaspy. Plaspy recibe los mensajes entrantes en el mismo puerto para todos los equipos y utiliza detección automática de protocolo para identificar y parsear el protocolo del tracker.

- El tracker abre una sesión TCP o UDP hacia d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Los mensajes de ubicación y eventos se transmiten a Plaspy, donde el protocolo se detecta automáticamente.
- Plaspy parsea los paquetes entrantes y muestra el dispositivo como un activo en la plataforma para su monitoreo.
- Tras la configuración, valide que aparezcan en Plaspy los reportes de latido y posición para confirmar la conectividad de extremo a extremo.
- Si surgen problemas de conectividad, verifique la configuración APN, la intensidad de señal y que el firmware del dispositivo soporte el reporte por TCP/UDP.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del Box Tracker o al software proporcionado por el fabricante.
2. Ubique la sección de red o ajustes de servidor usada para configurar el destino de reporte.
3. Ingrese d.plaspy.com o 54.85.159.138 como la dirección de servidor del dispositivo.
4. Establezca el puerto de destino en 8888.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere selección explícita.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.
7. Confirme que el Box Tracker reporte a Plaspy revisando la actividad del dispositivo y los mensajes entrantes en la plataforma.

## Ejemplos de comandos de configuración

Los comandos de configuración exactos y la sintaxis dependen del firmware del Box Tracker y de la herramienta de configuración del fabricante que utilice. Algunos instaladores emplean una interfaz web o utilidad de PC, mientras que otros usan comandos por SMS o serie; los comandos y la forma de aplicarlos varían.

Al configurar el dispositivo, los ajustes esenciales que debe indicar al tracker son el dominio o IP del servidor Plaspy y el puerto 8888, además del transporte elegido (UDP o TCP). Por ejemplo, una instrucción típica del fabricante le pedirá establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto de reporte en 8888. Plaspy detectará automáticamente el protocolo del tracker una vez que lleguen los mensajes.

## Notas de configuración

- Las diferencias de firmware pueden alterar los nombres exactos de los menús o la sintaxis de los comandos usados para fijar los valores de servidor y puerto; siempre verifique la versión de firmware antes de seguir comandos.
- Elegir TCP o UDP puede afectar las características de entrega; seleccione el transporte que requiera su instalación y verifíquelo en Plaspy.
- Asegúrese de que el APN y las credenciales del operador móvil sean correctas para que las sesiones GPRS se establezcan de forma fiable.
- Si usa una utilidad de configuración o comandos SMS, conserve los marcadores de posición que proporcione el fabricante y reemplace con su APN o credenciales según corresponda.
- Guarde una copia de los ajustes originales del dispositivo para poder restaurarlos si es necesario durante las pruebas.

## Por qué usar Plaspy con esta configuración

Usar el Box Tracker con Plaspy le ofrece a los integradores una forma sencilla de centralizar los datos de ubicación y estado de vehículos mediante un único endpoint de servidor compartido. Dado que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker, integrar el Box Tracker se concentra en proporcionar la dirección de servidor correcta, el transporte y los requisitos de red en lugar de gestionar múltiples endpoints por dispositivo.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona la conectividad de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de Box http://www.boxtelematics.com/ para asegurarse de contar con las instrucciones más actualizadas.
