---
slug: /calmamp/lmu_1100/configuration
id: lmu_1100-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-1100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp LMU-1100 para Plaspy con ejemplos de SMS y ajustes de servidor
keywords:
  - Configuración CalmAmp LMU-1100
  - Configuración LMU-1100 Plaspy
  - LMU-1100 Plaspy
  - Configuración de rastreador Plaspy
  - Configuración SMS rastreador GPS
  - Configuración servidor rastreador vehicular
  - Configuración seguimiento de activos
  - Configuración servidor LMU-1100
  - Configuración seguimiento de flotas
  - Configuración plataforma GPS
---

# CalmAmp - LMU-1100 Configuración

Esta página describe el contexto público de configuración para usar el rastreador CalmAmp LMU-1100 con Plaspy. Incluye los ajustes de servidor compartidos que debe aplicar, los pasos habituales de preparación y ejemplos de comandos SMS extraídos de la documentación pública del fabricante cuando están disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, usando un único puerto para todos los dispositivos. Los pasos exactos en el equipo del fabricante para el LMU-1100 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; considere esta página como un punto de partida práctico y consulte los recursos del fabricante cuando sea necesario.

## Resumen de configuración

Configurar el LMU-1100 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos al punto final central de Plaspy. El proceso normalmente ajusta la configuración de red, apunta el dispositivo a los endpoints de servidor de Plaspy y verifica la conexión para que el rastreador sea visible en la plataforma.

- Configure el dispositivo para que apunte al endpoint del servidor de Plaspy y pueda enviar reportes GPRS a Plaspy.
- Ingrese las credenciales APN y verifique la conectividad de datos móviles del módem integrado.
- Establezca el puerto de servidor de Plaspy para que el rastreador llegue al endpoint de recolección correcto.
- Use los comandos de verificación del dispositivo para confirmar la configuración y asegurarse de que el rastreador está reportando.
- Aplique y reinicie o haga un reinicio del dispositivo para que los cambios surtan efecto y sean reconocidos por Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP según la opción del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden configurarse usando UDP o TCP en el puerto 8888

## Requisitos previos habituales

- Dispositivo instalado y alimentado, con batería de respaldo cargada si es necesaria para el comisionamiento.
- Una tarjeta SIM activa con datos móviles habilitados y capacidad SMS para los flujos de configuración basados en SMS.
- Credenciales APN del operador móvil que incluyan el nombre del APN y, opcionalmente, usuario y contraseña.
- Acceso al método de configuración del fabricante, como comandos SMS o herramienta de gestión PULS cuando esté disponible.
- Conocimiento del identificador que devuelve el rastreador (para LMU-1100 esto suele ser el valor MID que el dispositivo devuelve).
- Un plan para validar que el dispositivo reporta al servidor Plaspy una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

El LMU-1100 se configura para enviar datos GPRS al endpoint y puerto compartido de Plaspy para que la plataforma pueda ingerir mensajes de ubicación y eventos. El servidor de Plaspy escucha en un solo puerto para todos los dispositivos compatibles y la plataforma detecta automáticamente el protocolo del dispositivo.

- El rastreador se configura con el dominio o IP del servidor Plaspy para que los reportes salientes apunten a Plaspy.
- El puerto configurado 8888 asegura que los mensajes lleguen al servicio de recolección de Plaspy.
- En el dispositivo se puede seleccionar transporte UDP o TCP si la unidad requiere elección de transporte.
- Una vez conectado, el dispositivo envía reportes periódicos y mensajes de eventos que Plaspy ingiere para visibilidad y monitoreo.
- Los comandos de verificación confirman que el dispositivo apunta a Plaspy y que está reportando activamente.

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante para el LMU-1100 (interfaz de comandos SMS o herramientas de gestión CalAmp como PULS).
2. Obtenga el MID o identificador del dispositivo usando el comando de verificación para poder dirigir correctamente los comandos SMS.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en la configuración del dispositivo según las indicaciones del fabricante.
4. Establezca el puerto del servidor en 8888 en la configuración del equipo.
5. Elija UDP o TCP como transporte si el dispositivo requiere selección; Plaspy detectará el protocolo automáticamente en su lado.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los ajustes se apliquen.
7. Valide que el dispositivo reporta a Plaspy comprobando la configuración del equipo y monitorizando la llegada de reportes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El LMU-1100 puede configurarse mediante comandos SMS. Los siguientes comandos se presentan en el orden recomendado por la guía del fabricante. El MID del dispositivo (ID de 10 dígitos) devuelto por el equipo puede ser requerido al enviar comandos SMS; la documentación del fabricante indica que el MID se devuelve con el comando !R0. Los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN del operador, el usuario del APN y la contraseña del APN respectivamente.

- Establecer el APN del operador
```text
!RP,2306,0,{{apn}}
```

- Establecer el nombre de usuario del APN del operador (si es requerido)
```text
!RP,2314,0,{{apnu}}
```

- Establecer la contraseña del APN del operador (si es requerida)
```text
!RP,2315,0,{{apnp}}
```

- Establecer el servidor GPRS a la IP de Plaspy
```text
!RP,2319,0,54.85.159.138
```

- Establecer el puerto del servidor al puerto de Plaspy
```text
!RP,769,0,8888
```

- Reiniciar el rastreador para aplicar los ajustes (recomendado tras la configuración)
```text
!R3,70,0
```

- Consultar la configuración actual en el dispositivo
```text
!RO
```

Notas sobre los marcadores de posición:
- {{apn}} — reemplace con el nombre del APN de su operador móvil.
- {{apnu}} — reemplace con el usuario del APN si el operador lo requiere.
- {{apnp}} — reemplace con la contraseña del APN si el operador la requiere.

Si su flujo de trabajo usa el dominio en lugar de la IP, ingrese d.plaspy.com donde la configuración del dispositivo soporte nombres de dominio. Los comandos de ejemplo anteriores usan la IP pública del servidor tal como se muestra en la guía del fabricante.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la disponibilidad de comandos y los IDs de parámetros; verifique los comandos contra la versión de firmware del LMU-1100 que esté utilizando.
- El LMU-1100 soporta configuración por SMS según la guía pública, por lo que debe asegurarse de que el número telefónico controlador y el método SMS cumplan sus políticas de seguridad operativa.
- Cuando un dispositivo ofrece la opción entre TCP y UDP, seleccione el transporte compatible con su entorno de instalación; Plaspy detectará el protocolo automáticamente una vez que reciba datos en el puerto 8888.
- Verifique siempre las credenciales APN con su operador móvil antes de aplicar comandos de configuración para evitar demoras en la conectividad.
- La configuración por aire y las actualizaciones de firmware pueden estar disponibles mediante CalAmp PULS para despliegues a gran escala y gestión remota.

## Por qué usar Plaspy con esta configuración

Usar el LMU-1100 con Plaspy ofrece a las organizaciones una forma práctica de capturar datos de ubicación y eventos desde rastreadores compactos para activos exteriores y centralizar esa información en una única plataforma de visibilidad. Configurar el dispositivo para que apunte al endpoint compartido de Plaspy y utilizar los comandos SMS o las herramientas del fabricante permite que los rastreadores envíen telemetría y reportes de eventos que facilitan el monitoreo, la recuperación y la supervisión operativa.

To learn more about Plaspy and its features visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and technical details verify manufacturer documentation at http://www.calamp.com/ as device behavior and setup methods can change over time.
