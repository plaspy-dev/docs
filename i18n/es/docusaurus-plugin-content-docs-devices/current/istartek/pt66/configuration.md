---
slug: /istartek/pt66/configuration
id: pt66-configuration
sidebar_label: Configuration
title: iStartek - PT66 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el iStartek PT66 con ajustes de servidor Plaspy y comandos SMS para configuración rápida
keywords:
  - configuración iStartek PT66
  - configuración inicial iStartek PT66
  - configuración de servidor PT66
  - configuración PT66 Plaspy
  - configuración rastreador GPS PT66
  - configuración rastreador wearable iStartek
  - configuración SMS PT66
  - integración rastreador Plaspy
  - configuración rastreador seguridad personal
  - configuración rastreador GPS cuidado de adultos mayores
---

# iStartek - Configuración del PT66

Esta página documenta el contexto público de configuración para usar el rastreador wearable iStartek PT66 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en los comandos SMS de ejemplo que el fabricante publica para registrar el dispositivo con Plaspy y habilitar el envío confiable de reportes a la plataforma.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT66 admite configuración por SMS y por red celular; esta guía incluye los comandos SMS públicos disponibles en la documentación del dispositivo y explica cómo apuntarlo a Plaspy para rastreo y alertas.

## Resumen de la configuración

Este proceso prepara al PT66 para comunicarse de forma confiable con la plataforma de Plaspy y valida la conectividad para que el dispositivo aparezca en los paneles y flujos de alertas de Plaspy.

- Configure el PT66 para enviar ubicación y telemetría al endpoint del servidor Plaspy.
- Proporcione al dispositivo el APN correcto del operador móvil para que pueda usar datos GPRS cuando sea necesario.
- Seleccione el transporte (UDP o TCP) y establezca el puerto de Plaspy para que el servidor reciba los mensajes.
- Verifique el reporte usando el comando de verificación del PT66 y confirme la visibilidad en Plaspy.
- Opcional: restablezca a valores de fábrica antes de la configuración inicial al preparar múltiples dispositivos.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el PT66. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de configurar

- Un PT66 con batería cargada y una tarjeta SIM activa habilitada para datos o reporte por GPRS cuando sea necesario.
- Acceso al método de configuración del fabricante, como comandos SMS, aplicación complementaria o herramienta del proveedor.
- APN del operador y, si aplica, usuario y contraseña del APN para la tarjeta SIM.
- Un teléfono móvil capaz de enviar SMS al dispositivo o acceso al portal de configuración del proveedor.
- Acceso básico a su cuenta en Plaspy para confirmar que el dispositivo aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El PT66 transmite ubicación y telemetría a través de la red celular hacia el endpoint y puerto compartido de Plaspy, de modo que la ubicación, las alertas de seguridad y los datos de salud puedan agregarse en los paneles de Plaspy.

- El dispositivo se configura para reportar al endpoint y puerto del servidor Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- Plaspy recibe actualizaciones periódicas de posición y mensajes de eventos y detecta automáticamente el protocolo del rastreador.
- Eventos de seguridad como SOS o alarma por caída se envían a Plaspy para aplicar reglas de notificación y alertas.
- Los datos de salud y telemetría del PT66 pueden agregarse junto con otros dispositivos en la plataforma Plaspy.
- La elección entre UDP o TCP afecta el comportamiento del transporte; Plaspy acepta ambos en el puerto compartido.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepárese para enviar comandos SMS de configuración al PT66.
2. Ingrese el endpoint del servidor Plaspy configurando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de destino en 8888 (todos los dispositivos de Plaspy usan el mismo puerto).
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y cualquier credencial del APN necesaria para la conectividad GPRS/datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y que sea visible en su cuenta o tablero de Plaspy.

## Ejemplos de comandos de configuración

La documentación pública del PT66 proporciona comandos basados en SMS para la configuración. Use un teléfono autorizado para enviar SMS al dispositivo y ajuste los marcadores de posición según corresponda.

Nota: El comando de restablecimiento es opcional y se usa típicamente cuando se prepara un dispositivo para su primer uso o para solución de problemas.

1. Reinicio de fábrica opcional (usar solo cuando sea necesario)
```text
FACTORY#
```

2. Establecer la zona horaria a UTC+0
```text
GMT,E,0#
```

3. Configurar el APN del operador
```text
APN,[apn]#
```
Si su APN requiere usuario y contraseña, incluya los marcadores:
```text
APN,[apn],[apnu],[apnp]#
```
- [apn] = nombre del APN del operador
- [apnu] = usuario del APN si se requiere (dejar en blanco si no aplica)
- [apnp] = contraseña del APN si se requiere (dejar en blanco si no aplica)

4. Apuntar el dispositivo al servidor GPRS de Plaspy
```text
SERVER,1,d.plaspy.com,8888#
```
O alternativamente configurar el servidor por IP:
```text
SERVER,0,54.85.159.138,8888#
```
- Use la forma con dominio para permitir resolución DNS; use la IP cuando prefiera una dirección directa.

5. Establecer el intervalo de actualización de ubicación a 60 segundos
```text
TIMER,60#
```

6. Verificar parámetros actuales en el dispositivo
```text
PARAM#
```

Envíe cada comando como un SMS independiente según el formato SMS del dispositivo. Mantenga el orden cuando el fabricante indique que el orden es importante y espere la confirmación por SMS del dispositivo cuando esté disponible.

## Notas sobre la configuración

- La configuración por SMS está soportada por el PT66 según los comandos públicos; las herramientas del proveedor o una app complementaria pueden ofrecer métodos alternativos.
- Plaspy acepta tanto UDP como TCP en el puerto compartido 8888; elija el transporte que mejor soporte el dispositivo o la red.
- Diferentes versiones de firmware o revisiones de hardware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; siempre verifique con las notas más recientes del fabricante.
- Use el dominio d.plaspy.com cuando sea posible para que DNS gestione futuros cambios de IP; la opción de IP existe como alternativa directa.
- Después de aplicar cambios, reinicie el dispositivo si es necesario y confirme el reporte con el comando PARAM# y revisando su tablero en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el PT66 para reportar a Plaspy ofrece a cuidadores y organizaciones una vista consolidada de ubicación, eventos de seguridad y telemetría de salud desde wearables junto con otros activos rastreados. La detección automática de protocolos de Plaspy y el uso de un puerto compartido simplifican la incorporación de múltiples dispositivos compatibles, reducen la complejidad de configuración por equipo y centralizan las alertas y reportes.

Para obtener más información sobre Plaspy y cómo funciona con el PT66, visite https://www.plaspy.com. Para los métodos de configuración específicos del dispositivo, comportamientos de firmware y comandos oficiales más actuales, verifique los detalles en el sitio del fabricante https://istartek.com/. Las especificaciones y procedimientos del fabricante pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial antes de implementaciones a gran escala.
