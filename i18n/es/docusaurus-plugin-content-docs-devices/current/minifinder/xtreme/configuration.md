---
slug: /minifinder/xtreme/configuration
id: xtreme-configuration
sidebar_label: Configuration
title: MiniFinder - Xtreme Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para el MiniFinder Xtreme compatible con Plaspy y ajustes de servidor
keywords:
  - Configuración MiniFinder Xtreme
  - Instalación MiniFinder Xtreme
  - MiniFinder Xtreme Plaspy
  - Configuración rastreador GPS
  - Configuración rastreo de vehículos
  - Configuración servidor Plaspy
  - Configuración rastreador de activos
  - Configuración plataforma GPS
  - Comandos SMS para rastreador
  - Configuración seguimiento de flotas
---

# MiniFinder - Configuración Xtreme

Esta página describe el contexto público de configuración para usar el rastreador MiniFinder Xtreme con Plaspy. Explica los ajustes de servidor que Plaspy requiere, los prerrequisitos habituales y los pasos prácticos para configurar el dispositivo de modo que reporte a Plaspy para seguimiento en tiempo real y envío de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Las instrucciones a continuación usan los comandos públicos disponibles para el Xtreme y se enfocan en los valores que debe aplicar para apuntar el dispositivo al backend de Plaspy.

## Resumen de la configuración

Este proceso prepara el MiniFinder Xtreme para enviar datos de ubicación y eventos a Plaspy, de modo que el dispositivo sea visible en la plataforma para seguimiento en vivo, alertas y reproducción histórica.

- Configure los parámetros de red del dispositivo para que su conexión GPRS reporte a Plaspy
- Verifique el APN y que la SIM esté lista para datos y para configuración vía SMS
- Apunte el rastreador al servidor Plaspy d.plaspy.com o a la dirección IP equivalente
- Establezca el puerto común de Plaspy para que el dispositivo pueda conectarse a la plataforma
- Valide que el rastreador informe correctamente a Plaspy y genere los eventos esperados

## Ajustes del servidor Plaspy

Al configurar el MiniFinder Xtreme para su uso con Plaspy, utilice los siguientes ajustes públicos exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad MiniFinder Xtreme con batería cargada y encendida y acceso al método de configuración del fabricante
- Una tarjeta SIM activa con un APN válido para datos y capacidad de SMS si va a usar comandos SMS
- Los datos correctos del APN del operador de la SIM para permitir conexiones GPRS
- Acceso a la interfaz SMS del dispositivo o a la herramienta oficial de configuración de MiniFinder provista por el vendedor
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece y reporta una vez configurado
- Cobertura de red en el sitio de instalación para que el dispositivo pueda registrarse en la red celular

## Cómo se conecta este rastreador a Plaspy

El MiniFinder Xtreme se configura para reportar su posición y la telemetría de eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar la ubicación en vivo, activar eventos de geocerca y archivar los recorridos históricos.

- El rastreador envía conexiones GPRS a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El dispositivo comunica por UDP o TCP según el transporte seleccionado y el soporte del firmware
- Plaspy recibe las posiciones y eventos de sensores y los mapea en alertas e informes de la plataforma
- El reporte puede ser bajo demanda por evento o periódico según la configuración del dispositivo y el firmware
- Plaspy detecta automáticamente el protocolo del dispositivo cuando este se conecta al puerto compartido

## Flujo típico de configuración

1. Acceda al método oficial de configuración de MiniFinder para el Xtreme, por ejemplo mediante comandos SMS o la herramienta del fabricante.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione el tipo de transporte UDP o TCP si el dispositivo requiere una selección de transporte.
5. Configure los ajustes APN del dispositivo para que el rastreador pueda establecer una conexión GPRS con Plaspy.
6. Aplique o guarde la configuración y reinicie el dispositivo si el método de configuración o el firmware lo requieren.
7. Verifique que el dispositivo informe a Plaspy y aparezca en su cuenta con las actualizaciones de posición y eventos esperados.

## Ejemplos de comandos de configuración

El MiniFinder Xtreme puede configurarse usando comandos SMS. Los siguientes comandos públicos están en la documentación del fabricante y deben enviarse en el orden indicado cuando use SMS para la configuración.

- Establecer la zona horaria a UTC 0
```text
tz+00
```

- Establecer el APN del operador. Reemplace los marcadores con los valores de su operador de SIM. [apn] es obligatorio. [apnu] y [apnp] son marcadores opcionales de usuario y contraseña que algunos operadores requieren.
```text
S1,[apn]{{,[apnu],[apnp]}}
```
Explicación: Si su operador requiere usuario y contraseña de APN incluya los valores adicionales. Si no, envíe solo S1,[apn].

- Establecer el servidor GPRS con la IP y el puerto de Plaspy
```text
IP1,54.85.159.138,8888
```
Notas:
- Los comandos anteriores se envían por SMS al número del dispositivo a menos que utilice una herramienta del fabricante que aplique los mismos ajustes vía USB o por aire.
- El orden importa en la configuración por SMS: zona horaria, APN y luego los ajustes del servidor suelen ser la secuencia típica.

## Notas de configuración

- Las variantes de firmware y región pueden cambiar el formato de los comandos o las opciones disponibles. Confirme la sintaxis de los comandos para su revisión de firmware exacta en la documentación oficial de MiniFinder.
- El Xtreme soporta la configuración por SMS como se describe, pero las herramientas del proveedor o portales de servicio pueden ofrecer métodos alternativos.
- Elija TCP o UDP según la preferencia del instalador y el soporte del firmware; Plaspy acepta ambos y detecta automáticamente el protocolo usado.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos, asegúrese de que el puerto 8888 esté configurado correctamente en el rastreador para evitar problemas de conectividad.
- Si los comandos contienen marcadores como [apn], [apnu] o [apnp], sustitúyalos por los valores específicos de su operador antes de enviarlos.

## Por qué usar Plaspy con esta configuración

Usar el MiniFinder Xtreme con Plaspy ofrece una solución práctica para combinar un rastreador robusto y de larga autonomía con una plataforma centralizada para seguimiento en vivo, alertas por geocerca y reproducción histórica de trayectos. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue porque los mismos valores de servidor y puerto se aplican en dispositivos soportados y Plaspy maneja automáticamente la detección de protocolo cuando los dispositivos se conectan.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones de instalación y la sintaxis de los comandos más recientes en el sitio oficial de MiniFinder https://minifinder.se/.
