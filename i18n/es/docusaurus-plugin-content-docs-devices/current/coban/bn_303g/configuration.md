---
slug: /coban/bn_303g/configuration
id: bn_303g-configuration
sidebar_label: Configuration
title: Coban - BN-303G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Coban BN-303G con Plaspy, incluye ajustes de servidor y comandos SMS para puesta en marcha rápida
keywords:
  - Coban BN-303G
  - Configuración BN-303G
  - Configuración rastreador Coban
  - Configuración Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración servidor BN-303G
  - Comandos SMS BN-303G
  - Integración seguimiento de flotas
  - Configuración telemática GPS
---

# Coban - Configuración del BN-303G

Esta página documenta el contexto público de configuración para utilizar el rastreador Coban BN-303G con Plaspy. Resume los ajustes de servidor que Plaspy requiere, explica el flujo de trabajo típico de configuración y presenta los comandos SMS públicos que el fabricante incluye para la configuración en el dispositivo. Use esta guía para preparar el equipo y aplicar los pasos públicos comunes necesarios para que el BN-303G informe a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en conexiones entrantes, pero los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-303G soporta configuración vía TCP, UDP y SMS; esta guía destaca los comandos SMS disponibles en la documentación pública y explica dónde colocar los valores del servidor de Plaspy.

## Resumen de la configuración

El proceso de configuración permite que el BN-303G se comunique de forma confiable con Plaspy y garantiza que el dispositivo reporte ubicación y eventos de alarma a la plataforma. En el dispositivo, esto normalmente implica aplicar los ajustes de APN y GPRS, apuntar el equipo al endpoint del servidor de Plaspy, seleccionar el modo de transporte y verificar que los reportes lleguen a la plataforma.

- Configure las credenciales APN para que el rastreador pueda usar datos móviles para el reporte por GPRS.
- Apunte el dispositivo al endpoint compartido de Plaspy y configure el puerto de la plataforma.
- Seleccione UDP o TCP en el BN-303G si el firmware lo requiere.
- Verifique que el dispositivo sea visible en Plaspy y que los mensajes de ubicación y eventos se reciban correctamente.
- Opcionalmente habilite funciones de reporte adicionales, como estado de sensor de combustible o mejoras de protocolo mediante comandos SMS.

## Ajustes del servidor de Plaspy

- Use el dominio del servidor d.plaspy.com como endpoint principal para la configuración del dispositivo.
- La dirección IP del servidor (alternativa al dominio) 54.85.159.138 puede usarse cuando las herramientas del dispositivo requieren una IP numérica.
- El puerto 8888 es el puerto de la plataforma utilizado para todos los dispositivos en Plaspy.
- El BN-303G puede configurarse para usar transporte UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes, por lo que los dispositivos pueden reportar usando protocolos estándar sin necesidad de seleccionar el protocolo por dispositivo en la plataforma.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con datos móviles habilitados y la información APN correcta proporcionada por el operador.
- Acceso al método de configuración del BN-303G que prefiera el instalador (comandos SMS como los mostrados abajo o software del fabricante).
- El dispositivo conectado a la alimentación del vehículo o cargado para que los ajustes se conserven durante la configuración.
- Conocimiento de la contraseña del dispositivo; la documentación pública del BN-303G muestra una contraseña de fábrica/por defecto 123456 en los ejemplos de SMS.
- Acceso a los datos de la cuenta Plaspy y la capacidad de verificar que los mensajes del dispositivo aparecen en la plataforma después de la configuración.
- Un teléfono capaz de enviar SMS al rastreador si se usa la configuración basada en SMS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el BN-303G envía mensajes de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que los gestores de flota puedan ver la posición en tiempo real, alarmas y telemetría básica en una plataforma unificada. Plaspy ingiere la telemetría del dispositivo y detecta automáticamente el protocolo del rastreador para interpretar los mensajes y mostrarlos en la plataforma.

- El rastreador reporta a d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888.
- El dispositivo puede usar GPRS sobre TCP o UDP para enviar actualizaciones periódicas de ubicación a Plaspy.
- SMS sigue siendo un método disponible para comandos remotos y verificación cuando el dispositivo lo soporte.
- Eventos como SOS, alarmas de puertas, movimiento y estado de ignición se envían a la plataforma para alertas e historial.
- Plaspy procesa los mensajes entrantes y los asigna al registro de dispositivo correcto usando el protocolo que detecta automáticamente.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software; para el BN-303G el fabricante provee configuración por comandos SMS y herramientas de vendedor.
2. Asegúrese de que el dispositivo tenga una SIM operativa con el APN del operador y que tenga listos los valores APN (APN, usuario, contraseña).
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o, cuando se requiera una dirección numérica, 54.85.159.138 en la configuración del servidor del dispositivo.
4. Ajuste el puerto a 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
5. Seleccione transporte UDP o TCP en el dispositivo si el rastreador requiere selección explícita de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware exige un reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece y envía actualizaciones de posición y eventos en el panel de Plaspy.

## Ejemplos de comandos de configuración

La documentación pública del BN-303G proporciona comandos SMS para la configuración básica. Los comandos de ejemplo abajo usan la contraseña del dispositivo 123456 tal como aparece en la guía pública. Reemplace [apn], [apnu] y [apnp] con el APN, el usuario APN y la contraseña APN de su operador móvil respectivamente.

- Reset opcional a configuración de fábrica (usar solo si necesita devolver el dispositivo a valores de fábrica):
```
begin123456
```

- Ajustar la zona horaria a UTC+0:
```
time zone123456 0
```

- Configurar el APN del operador (reemplace [apn] con el APN de su operador):
```
apn123456 [apn]
```

- Configurar usuario y contraseña del APN (reemplace [apnu] y [apnp] con las credenciales del APN o deje en blanco si no son requeridas):
```
up123456 [apnu] [apnp]
```

- Apuntar el servidor GPRS a Plaspy usando la IP numérica y el puerto (este comando apunta el dispositivo a Plaspy):
```
adminip123456 54.85.159.138 8888
```

- Establecer intervalo de actualización (comando de ejemplo de la documentación pública; mantenga el formato exacto según su firmware):
```
fix060s060s***n123456
```

- Cambiar el rastreador a modo GPRS y configurar el transporte si es necesario (ejemplos mostrados en comandos públicos; elija la variante correcta para su firmware):
```
gprs123456,1,1
```
o
```
gprs123456
```

- Verificar los ajustes actuales en el dispositivo (comando de verificación):
```
check123456
```

- Habilitar reporte de protocolo extendido (ejemplo para habilitar sensor de combustible o mejor reporte de sensores digitales):
```
protocol123456 18
```

Notas sobre los marcadores y la contraseña:
- [apn] es la cadena APN del operador móvil requerida para datos GPRS.
- [apnu] es el usuario del APN si su operador lo exige; use un valor vacío si no es necesario.
- [apnp] es la contraseña del APN si su operador la solicita.
- Los comandos SMS de ejemplo usan la contraseña 123456 según los ejemplos públicos del fabricante. Si su dispositivo tiene otra contraseña o ésta ha sido cambiada, use la contraseña actual.

## Notas de configuración

- La configuración vía SMS está documentada en los materiales públicos del BN-303G; verifique la sintaxis de los comandos SMS según la versión de firmware de su equipo antes de enviar comandos.
- Algunas revisiones de firmware pueden requerir formatos de comando o el orden de argumentos ligeramente distintos; consulte la documentación del fabricante si un comando no es aceptado.
- Al elegir entre TCP y UDP, considere el comportamiento de la red y NAT del operador; ambos transportes son soportados por el BN-303G y Plaspy acepta cualquiera en el puerto compartido.
- Verifique siempre las credenciales APN con el operador móvil; ajustes APN incorrectos son una causa común por la que un dispositivo no puede reportar al servidor.
- Cambie la contraseña por defecto del dispositivo si usa configuración por SMS en campo y su despliegue requiere mayor seguridad, y registre la nueva contraseña en sus notas de instalación.

## Por qué usar Plaspy con esta configuración

Usar el BN-303G con Plaspy ofrece un camino sencillo hacia visibilidad en tiempo real del vehículo, reporte de alarmas y telemetría básica sin configuraciones complejas por dispositivo. Dado que Plaspy usa un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador, los instaladores pueden concentrarse en aplicar el APN y los ajustes del servidor en el equipo y validar la conectividad, en lugar de gestionar endpoints backend únicos por cada dispositivo.

Learn more about Plaspy and available platform features on the main website https://www.plaspy.com. For device specific command syntax, firmware details, and the latest installation guidance verify current information on the manufacturer site https://www.coban.net/ because manufacturer specifications and setup methods can change over time.
