---
slug: /eelink/gpt15/configuration
id: gpt15-configuration
sidebar_label: Configuration
title: EElink - GPT15 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador EElink GPT15 con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - configuración EElink GPT15
  - configuración inicial EElink GPT15
  - configuración GPT15 Plaspy
  - configuración servidor GPT15
  - configuración rastreador GPS
  - configuración rastreador Plaspy
  - configuración SMS GPT15
  - configuración rastreador de activos
  - configuración rastreador de equipaje
  - integración plataforma GPS
---

# EElink - GPT15 Configuración

Esta página recopila la información pública necesaria para conectar el rastreador EElink GPT15 con la plataforma Plaspy. Incluye los puntos finales del servidor y ejemplos de comandos SMS disponibles públicamente para que usted prepare el dispositivo y envíe ubicación y eventos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo comienza a reportar a la plataforma. Los pasos del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; considere los comandos y el flujo descritos aquí como una guía práctica y pública, no como un reemplazo de la documentación oficial de EElink o las instrucciones del proveedor.

## Resumen de configuración

Esta configuración prepara el GPT15 para enviar datos de ubicación y sensores a Plaspy usando el punto final y puerto compartido de Plaspy. Los pasos se centran en establecer conectividad de red, apuntar el dispositivo a Plaspy y validar que el equipo sea visible en la plataforma.

- Apunte el GPT15 al servidor de Plaspy para que las ubicaciones y alertas se envíen al procesamiento de la plataforma.
- Configure el APN y los ajustes GPRS para que el rastreador tenga acceso a datos móviles y transporte GPRS.
- Seleccione transporte UDP o TCP y configure el puerto compartido de Plaspy para que el dispositivo pueda comunicarse con la plataforma.
- Valide el reporte y la visibilidad de la telemetría en Plaspy para confirmar que lleguen eventos de ubicación, manipulación y batería.
- Use métodos de configuración remota como SMS o la app del dispositivo para aplicar ajustes en campo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo del rastreador después de que el equipo comience a reportar.

## Requisitos típicos antes de la configuración

- Un dispositivo GPT15 con la batería cargada y la unidad encendida.
- Una tarjeta SIM funcional con un plan de datos o GPRS activo si va a usar datos móviles, y capacidad de SMS si aplicará ajustes por SMS.
- Acceso al método de configuración de EElink que prefiera, por ejemplo la app del fabricante o comandos SMS.
- Cobertura de red en la ubicación del dispositivo que sea compatible con las bandas celulares del equipo.
- El identificador único del dispositivo requerido por plataformas, como el IMEI o el número de serie, para el registro en Plaspy.
- Un teléfono capaz de enviar SMS si va a usar la configuración por SMS.

## Cómo se conecta este rastreador a Plaspy

El GPT15 se configura para enviar datos de ubicación y eventos al punto final y puerto compartido de Plaspy para que la plataforma pueda ingerir la telemetría y mostrarla en mapas y alertas. Una vez apuntado a Plaspy y con acceso de red, el dispositivo transmite ubicación y eventos de sensores a la plataforma para visibilidad y notificaciones.

- El equipo envía actualizaciones de ubicación y mensajes de estado a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte se puede configurar como UDP o TCP según las opciones del dispositivo y las condiciones de la red.
- Plaspy recibe el flujo de datos entrante y detecta automáticamente el protocolo del dispositivo para un parseo correcto.
- Eventos como alertas por manipulación, geocercas y batería baja son enviados a Plaspy para notificaciones en tiempo real.
- La visibilidad en Plaspy permite historial de reportes, seguimiento en vivo y configuración de alertas para el GPT15.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de EElink que va a usar, como la app móvil de EElink o los comandos SMS documentados por el proveedor.
2. Configure los parámetros APN del operador móvil si es necesario, ya sea enviando el comando APN o usando la aplicación.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP como transporte si el dispositivo requiere selección explícita.
5. Aplique o guarde la configuración y, si procede, envíe el comando final de guardado o confirme los ajustes en la app.
6. Reinicie el dispositivo si lo indican las instrucciones del equipo o si los cambios no surten efecto de inmediato.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y la telemetría reciente en la plataforma.

Si prefiere la configuración por SMS, use los comandos mostrados en la sección Comandos de configuración de ejemplo abajo para realizar cada paso.

## Comandos de configuración de ejemplo

El GPT15 admite configuración por SMS. Los siguientes comandos públicos se presentan en el orden que normalmente se utiliza. Envíe cada comando como un SMS al número del dispositivo. El comando de reinicio se etiqueta como opcional y úselo solo si necesita restaurar el dispositivo a valores de fábrica.

- Reinicio inicial opcional a ajustes de fábrica
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
```
APN,[apn][ ,[apnu],[apnp] ]#
```
Notas sobre el comando APN
- [apn] es el nombre del APN del operador móvil.
- [apnu] es el usuario del APN si el operador lo requiere. Déjelo en blanco si no es necesario.
- [apnp] es la contraseña del APN si el operador la requiere. Déjela en blanco si no es necesaria.
- Mantenga el formato separado por comas. Incluya los campos opcionales solo si su operador los exige.

- Configurar el servidor GPRS usando el dominio de Plaspy (recomendado)
```
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente configurar el servidor GPRS usando la IP de Plaspy
```
SERVER,0,54.85.159.138,8888#
```

- Establecer un intervalo de actualización de 60 segundos
```
TIMER,60#
```

- Verificar parámetros actuales
```
PARAM#
```

Envíe cada comando como un mensaje SMS independiente a menos que esté usando un método por lotes soportado por su herramienta de configuración. Mantenga los marcadores de posición como [apn] tal como aparecen y reemplácelos con los datos de su operador al enviar los SMS.

## Notas de configuración

- La configuración por SMS es un método público soportado por el GPT15 y es útil cuando no hay acceso a la app durante el despliegue en campo.
- Las revisiones de firmware y versiones de hardware pueden cambiar los comandos soportados o los nombres de los parámetros. Verifique la documentación de EElink o las notas del proveedor para cambios específicos por firmware.
- Elija UDP o TCP según el comportamiento de la red local. Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar el puerto 8888 para conexiones directas del dispositivo al servidor Plaspy.
- Use el comando PARAM# o la app del dispositivo para verificar que los valores de APN, servidor y timer se aplicaron correctamente después de la configuración.

## Por qué usar Plaspy con esta configuración

Usar el GPT15 con Plaspy ofrece una forma práctica de monitorear equipaje y activos pequeños en tiempo real. Apuntar el rastreador al punto final y puerto compartido de Plaspy permite una ingestión rápida de ubicaciones, alertas por manipulación y avisos de batería, de modo que las alertas y los historiales estén disponibles centralmente para operadores y propietarios.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de configuración más reciente en el sitio oficial de EElink https://www.eelink.com.cn/ antes de desplegar dispositivos.
