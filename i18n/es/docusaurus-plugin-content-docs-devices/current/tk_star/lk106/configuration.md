---
slug: /tk_star/lk106/configuration
id: lk106-configuration
sidebar_label: Configuration
title: TK-Star - LK106 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el tracker TK-Star LK106 y ajustes del servidor Plaspy para enviar datos a la plataforma
keywords:
  - configuración TK Star LK106
  - configuración LK106
  - configuración servidor LK106
  - configuración Plaspy LK106
  - configuración rastreador GPS LK106
  - configuración rastreador Plaspy
  - ajustes servidor rastreador GPS
  - configuración GPRS LK106
  - comandos SMS TK Star
  - configuración seguimiento vehicular
---

# TK-Star - Configuración del LK106

Esta página explica la configuración pública necesaria para usar el rastreador portátil TK-Star LK106 con la plataforma Plaspy. Se concentra en los ajustes prácticos del servidor y en los comandos públicos suministrados por el fabricante que se usan comúnmente para apuntar los LK106 hacia Plaspy y que el equipo pueda reportar ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. Los comandos de ejemplo que se muestran provienen de documentación pública del LK106 y representan un flujo típico, basado en SMS, para configurar GPRS y reportar a Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el LK106 para que se comunique de forma fiable con Plaspy y sea visible en la plataforma. Los pasos a continuación le ayudarán a establecer el APN de datos móviles si es necesario, apuntar el dispositivo al servidor Plaspy y habilitar cargas periódicas para que su dispositivo aparezca en el panel de Plaspy.

- Configurar el APN del operador móvil y las credenciales si son necesarias.
- Apuntar el tracker al endpoint del servidor Plaspy y usar el puerto compartido de Plaspy para todos los dispositivos.
- Establecer el intervalo de subida para que el tracker envíe actualizaciones de posición de forma regular.
- Cambiar el tracker a modo GPRS para que use datos móviles al reportar al servidor.
- Validar la conectividad para que el dispositivo aparezca y reporte correctamente en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración entre distintos modelos.

## Requisitos previos típicos

- Una unidad LK106 encendida y funcional con batería o alimentación externa conectada.
- Una tarjeta SIM válida con datos móviles activos y GPRS habilitado cuando sea necesario.
- Acceso al método de configuración del fabricante LK106; en este caso se usan comandos por SMS como en los ejemplos.
- Datos del APN del operador móvil si la SIM requiere un APN, usuario o contraseña específicos.
- Capacidad para enviar SMS al rastreador desde un número autorizado si el dispositivo restringe el acceso por SMS.

## Cómo se conecta este tracker a Plaspy

El LK106 se configura para enviar datos de posición y estado al endpoint y puerto del servidor Plaspy, de modo que Plaspy pueda mostrar y gestionar la telemetría. Una vez correctos el servidor y los ajustes de APN, el equipo realizará subidas periódicas de datos usando el protocolo de transporte seleccionado.

- El tracker reporta ubicación y estado a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Plaspy acepta conexiones por UDP o TCP y detectará automáticamente el protocolo LK106.
- Normalmente el dispositivo se cambia a modo GPRS para que use datos móviles en las subidas periódicas.
- Los intervalos de subida regulares aseguran visibilidad en Plaspy para monitoría en tiempo real y trazado histórico.
- Las alertas y los reportes de eventos se vuelven visibles en Plaspy una vez que el dispositivo se conecta correctamente.

## Flujo de configuración común

1. Acceda al método de configuración oficial de TK-Star para el LK106, comúnmente comandos por SMS o las herramientas del proveedor documentadas por el fabricante.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte para las subidas GPRS.
5. Aplique o guarde los cambios de configuración en el dispositivo usando el método del fabricante.
6. Reinicie el dispositivo si el firmware requiere un reinicio para aplicar los ajustes de red.
7. Valide que el dispositivo esté reportando a Plaspy y aparezca en la plataforma con actualizaciones regulares de ubicación.

## Comandos de configuración de ejemplo

El LK106 puede configurarse mediante comandos SMS. A continuación se muestran los comandos públicos y de uso común y el orden recomendado. La contraseña por defecto del dispositivo mostrada aquí es 123456 y debe mantenerse o cambiarse según corresponda.

- Paso opcional inicial para restaurar ajustes de fábrica (usar solo si necesita resetear el dispositivo):
```text
begin123456
```

- Establecer el APN del operador (reemplazar [apn] con el APN de su operador):
```text
apn123456 [apn]
```

- Establecer el usuario del APN si su operador lo requiere (reemplazar [apnu] con el usuario APN):
```text
apnuser123456 [apnu]
```

- Establecer la contraseña del APN si su operador la requiere (reemplazar [apnp] con la contraseña APN):
```text
apnpasswd123456 [apnp]
```

- Establecer el servidor GPRS hacia Plaspy usando la IP pública y el puerto 8888
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de subida a 60 segundos para que el dispositivo reporte cada minuto
```text
upload123456 60
```

- Cambiar el tracker a modo GPRS para que use datos móviles en las subidas
```text
gprs123456
```

Explicación de los marcadores:
- [apn] — cadena APN del operador necesaria para la sesión GPRS.
- [apnu] — usuario opcional del APN si la operadora requiere autenticación.
- [apnp] — contraseña opcional del APN si la operadora requiere autenticación.

Envíe estos SMS desde el número autorizado o el número de gestión configurado para el LK106. Mantenga la contraseña por defecto 123456 solo si no la ha cambiado por seguridad; incluya la contraseña correcta del dispositivo en cada comando cuando sea necesario.

## Notas de configuración

- La configuración por SMS es el método habitual del fabricante para el LK106; siga el orden anterior al usar comandos por SMS para evitar una configuración parcial.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis o los requisitos de los comandos. Verifique los comandos contra el manual del LK106 correspondiente al firmware de su equipo.
- Elija UDP o TCP según sus requerimientos de red y del dispositivo; Plaspy soporta ambos y detectará el protocolo automáticamente al conectar.
- Los marcadores del APN deben establecerse correctamente para que el dispositivo cree una sesión GPRS y alcance el servidor Plaspy.
- Recuerde que Plaspy utiliza un puerto compartido para todos los dispositivos, lo que simplifica la configuración del servidor para flotas con múltiples trackers.

## Por qué usar Plaspy con esta configuración

Configurar el LK106 para que reporte a Plaspy brinda a las organizaciones visibilidad confiable de ubicación y la capacidad de monitorear dispositivos en tiempo real. Apuntar el dispositivo al servidor y puerto compartidos de Plaspy garantiza un comportamiento consistente entre distintos modelos de rastreadores y facilita la integración de flotas.

Para saber más sobre Plaspy e integración de dispositivos soportados, visite https://www.plaspy.com. Los comandos específicos del dispositivo, el comportamiento del firmware y las recomendaciones del fabricante pueden cambiar con el tiempo; verifique los detalles más recientes en el sitio oficial del fabricante https://www.tk-star.com/ antes de realizar implementaciones a gran escala.
