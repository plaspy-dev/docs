---
slug: /sentar/d52_r9/configuration
id: d52_r9-configuration
sidebar_label: Configuration
title: Sentar - D52-R9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el smartwatch Sentar D52-R9 y enviar datos a Plaspy con la configuración de servidor compartida
keywords:
  - Configuración Sentar D52 R9
  - Instalación Sentar D52 R9
  - Sentar D52 R9 Plaspy
  - Configuración smartwatch Sentar
  - Configuración de servidor D52 R9
  - Configuración plataforma GPS D52 R9
  - Configuración software de rastreo D52 R9
  - Configuración de tracker Plaspy
  - Guía configuración rastreador GPS
  - Configuración wearable GPS
---

# Sentar - D52-R9: Configuración

Esta página documenta el contexto público de configuración para usar el smartwatch Sentar D52-R9 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy a los que deberá apuntar el dispositivo y presenta ejemplos de comandos SMS que se utilizan comúnmente para preparar el reloj para comunicarse con el servidor. Use esta guía como una lista de verificación práctica para conectar un D52-R9 a Plaspy, conservando la documentación del fabricante como referencia.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que no es necesario emparejar manualmente un protocolo en el servidor. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor utilizadas para enviar comandos de configuración. Los comandos SMS de ejemplo que figuran a continuación reflejan un flujo de configuración público común e incluyen marcadores para credenciales APN e identificadores de red móvil.

## Resumen de la configuración

El objetivo de la configuración es dejar al D52-R9 listo para reportar la ubicación y la telemetría de eventos a la plataforma Plaspy de forma fiable. Los pasos públicos típicos incluyen ajustar la zona horaria del dispositivo, confirmar los identificadores de la red móvil, configurar el APN, dirigir el dispositivo a los endpoints de Plaspy y definir la frecuencia de subida de datos.

- Configure los parámetros APN y verifique los datos del operador para que el reloj pueda usar datos móviles.
- Apunte el dispositivo al endpoint del servidor Plaspy para que la telemetría llegue a Plaspy y se pueda usar en mapas y alertas.
- Defina los intervalos de actualización para controlar con qué frecuencia el equipo envía ubicación y estado.
- Valide la conectividad y los datos IMSI o MCC MNC para confirmar que la SIM y el plan del operador son correctos.
- Opcionalmente, realice un restablecimiento de fábrica si necesita borrar ajustes previos antes de provisionar el equipo para Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que siempre debe configurar el puerto 8888 en el dispositivo cuando envíe datos a Plaspy.

## Requisitos habituales antes de la configuración

- Una unidad D52-R9 cargada y encendida, lista para configurar.
- Una tarjeta SIM con datos y SMS habilitados y los detalles APN correctos para el operador.
- Acceso al número telefónico del dispositivo o un móvil con capacidad de enviar SMS para mandar mensajes de configuración.
- Documentación del fabricante o la herramienta de configuración aprobada por Sentar para confirmar la sintaxis SMS y las particularidades del firmware.
- Conocimiento de la contraseña por defecto del equipo en caso de que los comandos SMS estén protegidos; los comandos de ejemplo a continuación usan la contraseña por defecto mostrada en muestras públicas.

## Cómo se conecta este rastreador a Plaspy

El D52-R9 envía ubicación y telemetría de eventos a través de la red celular al endpoint y puerto compartidos de Plaspy para que Plaspy proporcione mapas en vivo, historial y alertas. En la práctica, el rastreador se configura para usar el APN del operador y luego se apunta al dominio o IP y puerto de Plaspy.

- El dispositivo envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos y detecta automáticamente el protocolo entrante.
- La telemetría y los eventos de geocercas se transmiten a Plaspy para su mapeo y generación de alertas.
- Plaspy procesa los flujos de eventos para que operadores o cuidadores puedan ver datos en tiempo real e históricos.
- Plaspy utiliza el mismo puerto para todos los dispositivos, por lo que la configuración es consistente entre despliegues.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Sentar para el D52-R9, normalmente comandos SMS o una herramienta del proveedor, y confirme la contraseña del dispositivo.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la opción de servidor del dispositivo.
3. Establezca el puerto 8888 en el dispositivo para coincidir con Plaspy.
4. Si el dispositivo solicita elegir un transporte, seleccione UDP o TCP según la preferencia del instalador o la capacidad del equipo.
5. Configure los parámetros APN y cualquier valor MCC MNC requerido por el operador para que el dispositivo tenga conectividad de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere.
7. Verifique que el dispositivo reporte a Plaspy revisando el estado en línea en Plaspy y utilizando los comandos de verificación disponibles en el equipo.

## Comandos de configuración de ejemplo

El D52-R9 puede configurarse por SMS usando los siguientes ejemplos públicos de comandos. Estos comandos se ofrecen en el orden que aparece en muestras públicas de configuración. La contraseña de ejemplo mostrada en ejemplos públicos es 123456. Use la contraseña válida de su unidad si es diferente.

- Restablecer a valores de fábrica (paso opcional inicial)
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Comprobar el IMSI para ver MCC y MNC
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde los campos APN contienen marcadores y xxxyy es MCC más MNC
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explicación: {{apn}} es el nombre del APN, {{apnu}} es el usuario del APN y {{apnp}} es la contraseña del APN. Reemplace xxxyy con el código de red móvil formado por MCC más MNC, por ejemplo 310260 donde 310 es MCC y 260 es MNC.

- Configurar el servidor GPRS para apuntar a Plaspy por IP y puerto
```text
pw,123456.ip,54.85.159.138,8888#
```

- Establecer intervalo de subida a 300 segundos
```text
pw123456,upload,300#
```

- Consultar ajustes actuales del dispositivo
```text
pw,123456,ts#
```

Nota sobre la sintaxis: estos comandos se presentan como ejemplos públicos. Algunas versiones de firmware o variantes regionales pueden requerir separadores o un orden de parámetros ligeramente distinto. Confirme la sintaxis exacta de los SMS en la documentación de Sentar antes de un despliegue amplio.

## Observaciones sobre la configuración

- Las versiones de firmware y las variantes regionales pueden modificar la sintaxis de los comandos SMS y el orden de parámetros; confirme siempre con la documentación de Sentar para el firmware de su dispositivo.
- La configuración de ejemplo del D52-R9 usa comandos SMS y ajustes APN para habilitar datos móviles; asegúrese de que el plan de la SIM soporte datos y SMS.
- Plaspy soporta UDP y TCP y detecta automáticamente el protocolo que use el dispositivo; elija el transporte en el equipo si el firmware lo requiere.
- Plaspy usa el puerto 8888 para todos los dispositivos, por lo que no necesita mapeo de puertos por dispositivo en el servidor.
- Si realiza un restablecimiento de fábrica como en el ejemplo, considérelo como un paso inicial o de solución de problemas y no como una operación rutinaria para unidades ya provisionadas.

## Por qué usar Plaspy con esta configuración

Conectar el Sentar D52-R9 a Plaspy brinda a cuidadores y operadores un único lugar para ver ubicación en vivo, eventos de geocerca e historial de wearables. Este enfoque de configuración estandariza el endpoint de servidor y el puerto para que dispositivos de varios fabricantes puedan provisionarse de forma consistente en Plaspy y comenzar a enviar telemetría para mapas y alertas.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo, así que verifique los últimos detalles de configuración y la sintaxis de comandos SMS en el sitio oficial de Sentar http://www.sentarsmart.com/ antes de desplegar a gran escala.
