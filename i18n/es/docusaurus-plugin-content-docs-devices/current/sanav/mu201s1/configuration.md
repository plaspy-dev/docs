---
slug: /sanav/mu201s1/configuration
id: mu201s1-configuration
sidebar_label: Configuration
title: Sanav - MU201S1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Sanav MU201S1 a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración Sanav MU201S1
  - Configuración MU201S1
  - Configuración MU201S1 Plaspy
  - Configuración rastreador Sanav
  - Configuración rastreador GPS Plaspy
  - Configuración servidor MU201S1
  - Configuración SMS MU201S1
  - Configuración GPRS MU201S1
  - seguimiento de activos MU201S1
  - seguimiento de mascotas MU201S1
---

# Sanav - Configuración MU201S1

Esta página describe el contexto público de configuración para usar el rastreador Sanav MU201S1 con la plataforma Plaspy. Aquí se explican los ajustes compartidos del servidor de Plaspy que deberá aplicar, los pasos preparatorios habituales y se incluyen ejemplos de comandos SMS basados en la documentación pública del fabricante para ayudar a conectar el equipo a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos de configuración en el lado del fabricante para el MU201S1 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MU201S1 permite configuración por SMS y por GPRS; esta guía se concentra en los pasos públicos y prácticos para apuntar el dispositivo a Plaspy usando esos métodos.

## Resumen de la configuración

El objetivo de este proceso es preparar el MU201S1 para que envíe de forma fiable datos de ubicación y eventos a Plaspy. Esto implica configurar el APN del equipo, apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el transporte si es necesario y validar que los mensajes llegan a la plataforma.

- Configurar el APN del equipo para permitir acceso a servicios de datos GPRS
- Establecer el servidor GPRS al endpoint de Plaspy para que la telemetría se dirija a la plataforma
- Elegir UDP o TCP como transporte si el dispositivo requiere selección explícita
- Verificar que el dispositivo reporte a Plaspy y confirmar la visibilidad de posiciones y eventos
- Usar comandos SMS para la configuración inicial si no es posible configurar GPRS de forma remota

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Soporte de transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un equipo MU201S1 con batería cargada y funcional, con una tarjeta SIM activa que tenga datos y SMS habilitados
- APN, nombre de usuario APN y contraseña APN del operador móvil para configurar GPRS
- Capacidad para enviar comandos SMS al rastreador para configuración inicial si usa el método SMS
- Acceso al método oficial de configuración del fabricante o a la documentación del MU201S1
- Cobertura de red en el área donde operará el dispositivo para que pueda registrarse en la red móvil y alcanzar Plaspy

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el MU201S1 usa su conexión de datos GPRS para transmitir posiciones y eventos al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos del dispositivo y determina automáticamente el protocolo del rastreador para que el dispositivo pueda aparecer en la plataforma sin asignaciones de puertos específicas por dispositivo.

- El rastreador envía actualizaciones de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte de datos puede ser UDP o TCP según lo requiera el dispositivo o el firmware
- Eventos como SOS, alertas de geocerca, batería baja y reportes de movimiento se transmiten vía GPRS a Plaspy
- Plaspy detecta automáticamente el protocolo del dispositivo para parsear los mensajes entrantes y presentarlos en la plataforma
- El reporte exitoso permite visibilidad y monitorización operativa en Plaspy

## Flujo común de configuración

1. Acceda al método de configuración oficial del fabricante para el MU201S1, normalmente comandos SMS o la configuración web del dispositivo si está disponible
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 según lo solicite el método de configuración
3. Establezca el puerto de destino en 8888 como puerto del servidor
4. Seleccione UDP o TCP si el dispositivo requiere una elección explícita del transporte de datos
5. Configure el APN del operador, el nombre de usuario APN y la contraseña APN cuando sea necesario
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el método o el firmware requiere reinicio
7. Valide que el dispositivo reporte a Plaspy y que los mensajes de ubicación y eventos aparezcan en la plataforma

## Ejemplos de comandos de configuración

El MU201S1 soporta configuración vía SMS. Los ejemplos públicos del fabricante usan una contraseña por defecto del dispositivo igual a 0000. Mantenga los marcadores de posición como [apn], [apnu] y [apnp] y reemplácelos por los valores de APN de su operador.

- Comando opcional de reseteo a fábrica inicial (usar solo si necesita restaurar la configuración):
```text
#username,0000,9*
```

- Configurar el APN del operador usando marcadores de posición para APN, nombre de usuario y contraseña:
```text
#username,0000,3,[apn],[apnu],[apnp]*
```
Explicación: Reemplace [apn] por el APN de su operador móvil, [apnu] por el nombre de usuario APN si se requiere y [apnp] por la contraseña APN si se requiere. Si el operador no solicita usuario o contraseña, esos campos pueden quedar vacíos según cómo interprete los comandos el dispositivo.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
#username,0000,18,54.85.159.138:8888*
```
Explicación: Este comando apunta el rastreador directamente a la IP y puerto del servidor Plaspy. Alternativamente puede usar d.plaspy.com si el dispositivo admite nombres de dominio en este comando.

- Configurar la ruta de transmisión de datos para habilitar el reporte al servidor:
```text
#username,0000,14,9*
```
Explicación: Este comando configura la ruta de transmisión según el conjunto de comandos del MU201S1. Mantenga el valor conforme a la guía del fabricante.

- Establecer el intervalo de actualizaciones periódicas a 60 segundos:
```text
#username,0000,6,60,9999*
```
Explicación: Este comando fija el intervalo de reporte. Ajuste los valores según las necesidades de su despliegue y la consideración de batería.

Notas sobre estos comandos:
- La cadena literal "username" es un marcador de posición presente en los ejemplos del fabricante. Reemplace conforme la sintaxis de comando del MU201S1 si el dispositivo requiere un identificador específico.
- La contraseña por defecto en estos ejemplos públicos es 0000. Si usted ha cambiado la contraseña, use la contraseña actual en lugar de 0000.
- Preserve el carácter asterisco al final de cada comando tal como se muestra si el parser SMS del rastreador lo requiere.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos. Verifique la sintaxis SMS exacta para la versión de firmware de su dispositivo en la documentación oficial.
- La configuración vía SMS es útil para ajustes en campo, pero se requiere verificación por GPRS para confirmar el reporte a Plaspy.
- Confirme los valores de APN con el operador móvil y utilice las credenciales correctas en lugar de los marcadores [apn], [apnu] y [apnp].
- Elija UDP o TCP según los requisitos del dispositivo y las condiciones de red; Plaspy soporta ambos y detectará automáticamente el protocolo entrante.
- Recuerde que la contraseña por defecto mostrada en ejemplos públicos es 0000; cambie las contraseñas del dispositivo cuando corresponda por seguridad operativa.

## Por qué usar Plaspy con esta configuración

Usar el Sanav MU201S1 con Plaspy ofrece a organizaciones y usuarios finales una forma directa de recopilar datos de ubicación y eventos desde un rastreador compacto y eficiente en consumo de batería. Apuntar el MU201S1 al servidor Plaspy permite ver posiciones, recibir alertas y monitorear el estado del dispositivo en una plataforma centralizada que gestiona automáticamente la detección de protocolos.

Para obtener más información sobre Plaspy y cómo puede ayudar con la visibilidad de dispositivos y la monitorización operativa, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones y la sintaxis de comandos más recientes con el fabricante en http://es.sanav.com/ antes del despliegue final.
