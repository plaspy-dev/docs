---
slug: /eelink/gpt45/configuration
id: gpt45-configuration
sidebar_label: Configuration
title: EElink - GPT45 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink GPT45 con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración EElink GPT45
  - Instalación EElink GPT45
  - Configuración servidor GPT45
  - Integración GPT45 Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador Plaspy
  - Comandos SMS EELINK GPT45
  - Configuración seguimiento de flotas
  - Configuración seguimiento de vehículos
  - Configuración dispositivo GPS
---

# EElink - Configuración del GPT45

Esta página documenta el contexto público de configuración para usar el rastreador GPS EElink GPT45 con Plaspy. Reúne los ajustes prácticos del servidor y los comandos SMS que se utilizan comúnmente para apuntar dispositivos GPT45 a Plaspy para seguimiento y telemetría en tiempo real. Utilice esta guía para preparar dispositivos para la integración y comprender los pasos básicos necesarios para que un dispositivo reporte en Plaspy.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Todos los dispositivos que reportan a Plaspy usan el mismo puerto, por lo que la configuración a continuación se centra en esos valores compartidos y muestra los comandos SMS del GPT45 que son normalmente disponibles para la configuración del equipo.

## Resumen de la configuración

Este proceso prepara un rastreador GPT45 para comunicarse con Plaspy estableciendo parámetros de red, el endpoint del servidor y el intervalo de reporte. El objetivo práctico es permitir que el dispositivo autentique en la red móvil, alcance el endpoint de Plaspy y comience a enviar ubicación y datos de sensores para que el dispositivo aparezca en la plataforma Plaspy.

- Configure el APN del dispositivo para que tenga acceso a datos GPRS.
- Establezca el endpoint del servidor Plaspy (dominio o IP) y el puerto compartido de Plaspy.
- Elija el transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.
- Defina un intervalo de reporte acorde al caso de uso y la vida de la batería.
- Valide los ajustes con una verificación de parámetros y confirme que el dispositivo aparece en Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el GPT45. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y la plataforma detecta automáticamente el protocolo del rastreador.

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: UDP o TCP en el puerto 8888
- detección automática del protocolo en Plaspy

## Requisitos habituales antes de la configuración

- Un dispositivo GPT45 cargado con acceso a su método de configuración por SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM móvil activa con datos y capacidad de SMS configurada con el APN correcto del operador.
- Acceso a un teléfono o gateway SMS capaz de enviar comandos de configuración por SMS al rastreador.
- Conocimiento de cualquier contraseña de acceso o configuración específica del dispositivo si su firmware o la herramienta del proveedor la requiere.
- Una cuenta en Plaspy y el flujo de registro de dispositivos habilitado en su instancia de Plaspy para validar el dispositivo una vez que informe.
- Comprensión básica de si utilizará transporte UDP o TCP según las necesidades del despliegue.

## Cómo se conecta este rastreador a Plaspy

El GPT45 se configura para reportar su posición y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma pueda procesar y mostrar datos de ubicación y sensores en tiempo real. Una vez aplicados los ajustes de servidor y APN, el dispositivo abrirá una sesión de datos y comenzará a enviar mensajes que Plaspy analizará usando la detección automática de protocolo.

- El dispositivo envía fijaciones GNSS y datos de localización alternativos al endpoint configurado de Plaspy.
- Mensajes de eventos y alarmas (por ejemplo colisiones o exceso de velocidad) se reenvían a Plaspy para alertas y procesamiento de reglas.
- La telemetría ambiental y de sensores se transmite para que Plaspy archive y muestre las lecturas.
- El dispositivo puede usar UDP o TCP para alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- La detección automática de protocolo de Plaspy gestiona el protocolo del dispositivo una vez que los mensajes llegan al servidor.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de EElink para el GPT45 (comandos SMS, herramienta del fabricante o software autorizado).
2. Asegúrese de que la SIM y el APN estén configurados para que el dispositivo tenga acceso a datos móviles.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y ajuste el puerto a 8888.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración en el dispositivo y reinícielo si es necesario.
6. Valide el dispositivo usando el comando PARAM# o su equivalente de verificación y confirme que reporta a Plaspy.
7. Verifique en la plataforma Plaspy que el dispositivo aparece y está enviando datos de ubicación y sensores.

## Comandos de configuración de ejemplo

El GPT45 soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos comúnmente usados para la configuración inicial. Preserve los marcadores de posición al sustituir sus credenciales de APN del operador.

- Restablecer a valores de fábrica (paso inicial opcional):
```text
FACTORY#
```

- Establecer la zona horaria a UTC+0:
```text
GMT,E,0#
```

- Establecer el APN del operador (reemplazar [apn] por el APN de su operador; incluya [apnu] y [apnp] si su operador requiere usuario y contraseña):
```text
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS a Plaspy por dominio (recomendado):
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy por IP:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización/reporte a 60 segundos:
```text
TIMER,60#
```

- Verificar parámetros actuales:
```text
PARAM#
```

Notas sobre marcadores de posición:
- [apn] es la cadena APN del operador necesaria para datos móviles.
- [apnu] y [apnp] representan campos opcionales de usuario y contraseña del APN; inclúyalos solo si el operador los requiere.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos u opciones disponibles; confirme siempre con las notas del firmware del dispositivo.
- El GPT45 soporta configuración por SMS como se muestra, pero pueden existir herramientas del fabricante o configuración por USB para aprovisionamiento masivo o remoto.
- Elija UDP o TCP según sus requisitos de fiabilidad y consideraciones de red; ambos transportes son compatibles para alcanzar Plaspy en el puerto 8888.
- Al usar el comando SERVER puede proporcionar tanto el dominio d.plaspy.com como la IP numérica 54.85.159.138; ambos apuntan a Plaspy en el puerto 8888.
- Si ejecuta un restablecimiento de fábrica (FACTORY#), recuerde volver a aplicar los ajustes de APN y servidor.

## Por qué usar Plaspy con esta configuración

Usar el GPT45 con Plaspy ofrece a las organizaciones un camino sencillo hacia el seguimiento en tiempo real, alertas basadas en sensores y visibilidad centralizada para operaciones de flotas y activos. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy simplifican la integración para que los dispositivos comiencen a reportar rápidamente una vez que se configuren el APN y los parámetros del servidor.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, cambios de firmware y detalles del fabricante, verifique la información en el sitio oficial de EElink https://www.eelink.com.cn/ ya que la documentación del proveedor puede cambiar con el tiempo.
