---
slug: /castel/sat_802/configuration
id: sat_802-configuration
sidebar_label: Configuration
title: Castel - SAT-802 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Castel SAT-802 con Plaspy usando ajustes de servidor compartido y comandos SMS para GPRS e Iridium
keywords:
  - configuración Castel SAT-802
  - configuración SAT-802 Plaspy
  - configuración rastreador Castel
  - configuración servidor SAT-802
  - configuración software seguimiento SAT-802
  - configuración GPRS Castel SAT-802
  - comandos SMS Castel SAT-802
  - configuración plataforma GPS Plaspy
  - configuración seguimiento flota SAT-802
  - guía conectividad SAT-802
---

# Castel - Configuración del SAT-802

Esta página documenta el contexto público de configuración para utilizar el rastreador Castel SAT-802 con Plaspy. Se enfoca en los valores de servidor prácticos, el flujo de trabajo y los comandos SMS publicados necesarios para apuntar el dispositivo a Plaspy y permitir que reporte posición y estado a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SAT-802 admite configuración por SMS para parámetros de red y puede configurarse para reportar a Plaspy usando los ajustes públicos que se indican a continuación.

## Resumen de la configuración

El objetivo de este proceso es preparar el SAT-802 para que se comunique de forma fiable con Plaspy y aparezca en la plataforma como un dispositivo activo. Cuando esté disponible, utilice el método de configuración recomendado por el fabricante (SMS, herramienta de configuración o interfaz de aprovisionamiento) y aplique exactamente los valores de servidor de Plaspy.

- Configure el APN y los valores de servidor del dispositivo para que el SAT-802 pueda usar GPRS y alcanzar Plaspy.
- Envíe los comandos SMS publicados o use la herramienta del proveedor para registrar el endpoint y el transporte del servidor.
- Valide la conectividad con el servidor de Plaspy y confirme que el rastreador está enviando datos de ubicación.
- Use la clave secreta derivada del ID del dispositivo al enviar comandos de configuración por SMS si es necesario.
- Verifique el funcionamiento tanto por GPRS como por el canal secundario del dispositivo, según corresponda a su despliegue.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un dispositivo SAT-802 alimentado y accesible con una SIM funcional y capacidad GPRS si va a usar datos celulares.
- El ID del dispositivo (IMEI o ID del fabricante) para derivar la clave secreta SMS por defecto cuando sea necesario.
- Capacidad para enviar mensajes SMS al dispositivo para configuración por SMS, o acceso a la herramienta de configuración del fabricante.
- Conocimiento del APN de la red móvil y, opcionalmente, del usuario y la contraseña del APN para la SIM instalada en el dispositivo.
- Un entorno de prueba seguro donde los reinicios del dispositivo y los cambios de configuración no interrumpan operaciones críticas.

## Cómo se conecta este rastreador a Plaspy

El SAT-802 puede usar su canal celular GPRS para enviar datos de ubicación y estado a Plaspy. Cuando GPRS no esté disponible, el dispositivo puede utilizar su vía de comunicación alternativa si está soportada. La configuración garantiza que el rastreador informe al endpoint y puerto compartidos de Plaspy.

- El rastreador se configura para reportar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Elija UDP o TCP como transporte si el dispositivo requiere una selección; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo será procesado por la plataforma una vez que lleguen los mensajes.
- Tras la configuración, el dispositivo transmite actualizaciones de ubicación y estado a Plaspy y estas se hacen visibles en la plataforma.
- La validación del reporte confirma que el rastreador es alcanzable y que Plaspy está recibiendo los datos.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Castel para el SAT-802 (comandos SMS del fabricante, software de configuración o herramienta de aprovisionamiento del proveedor).
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según el método del dispositivo.
3. Configure el puerto del servidor en 8888, ya que todos los dispositivos en Plaspy usan el mismo puerto.
4. Seleccione UDP o TCP si el SAT-802 requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos de confirmación necesarios.
6. Reinicie el dispositivo si las instrucciones del fabricante recomiendan un reboot para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad en la plataforma y la llegada de mensajes.

## Ejemplos de comandos de configuración

El SAT-802 admite configuración por SMS. La documentación del fabricante indica que los comandos SMS usan una clave secreta específica del dispositivo y que el APN y el servidor pueden establecerse vía SMS. La clave secreta SMS por defecto son los últimos 6 caracteres ASCII del ID del dispositivo.

Para configurar el APN y el servidor IP vía SMS use la siguiente estructura de comando (preserve los marcadores):

- Establecer APN GPRS y servidor de Plaspy
```
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

- Verificar la configuración GPRS actual
```
*{{SecretKey}}#get gprs#*
```

Notas sobre los marcadores:
- {{SecretKey}} — la contraseña SMS del dispositivo; por defecto son los últimos 6 caracteres ASCII del ID del dispositivo a menos que el proveedor la haya cambiado.
- {{apn}} — el APN del operador móvil para la tarjeta SIM instalada en el dispositivo.
- {{apnu}} — usuario del APN opcional si lo requiere el operador.
- {{apnp}} — contraseña del APN opcional si lo requiere el operador.

Envíe estos SMS al número del dispositivo desde un número autorizado y espere la confirmación del dispositivo según lo descrito en la documentación de Castel.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o el conjunto de comandos disponibles; siempre confirme con el manual vigente del dispositivo.
- Si el dispositivo solicita selección de transporte, elija UDP o TCP según sus preferencias de red; Plaspy acepta ambos en el puerto común 8888.
- La configuración por SMS es práctica para dispositivos en campo sin interfaz de configuración directa, pero requiere conocer la clave secreta del dispositivo.
- Use exactamente los ajustes del servidor Plaspy proporcionados: d.plaspy.com o 54.85.159.138 y el puerto 8888 para asegurar el enrutamiento correcto hacia la plataforma Plaspy.
- Mantenga un registro de los cambios y pruebe el envío de reportes tras guardar la configuración y reiniciar.

## Por qué usar Plaspy con esta configuración

Configurar el Castel SAT-802 para reportar a Plaspy ofrece a los operadores de flota un endpoint unificado para recibir datos de rastreo de dispositivos que soportan GPRS y satélite según corresponda. Usar los ajustes de servidor compartidos de Plaspy simplifica la incorporación de dispositivos porque la plataforma detecta automáticamente el protocolo del rastreador y utiliza un esquema de puertos consistente entre dispositivos.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para comandos específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información más reciente en el sitio de Castel http://www.castelecom.com/
