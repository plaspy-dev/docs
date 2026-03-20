---
slug: /coban/tk103b/configuration
id: tk103b-configuration
sidebar_label: Configuration
title: Coban - TK103B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Coban TK103B para conectarse a Plaspy por GPRS y SMS
keywords:
  - configuración Coban TK103B
  - instalación Coban TK103B
  - configuración TK103B Plaspy
  - configuración servidor TK103B
  - configuración rastreador GPS Coban
  - configuración rastreo de flotas
  - rastreador vehicular Plaspy
  - configuración rastreador GPRS
  - comandos SMS para rastreador
  - ajustes servidor rastreador GPS
---

# Coban - TK103B Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Coban TK103B con Plaspy. Reúne los pasos prácticos y los ajustes de servidor de acceso público necesarios para apuntar un equipo TK103B al backend de Plaspy, de modo que los reportes de ubicación y estado lleguen a la plataforma. Se basa en la descripción del equipo y en los comandos SMS de configuración de uso público que aceptan muchas unidades TK103B.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; trate estas instrucciones como el patrón general público para integrar con Plaspy y confirme los detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Resumen de la configuración

El objetivo de esta configuración es preparar el TK103B para que se comunique de forma fiable con Plaspy mediante GPRS o SMS. Con los comandos SMS públicos que se muestran abajo, usted puede establecer el APN del dispositivo, asignar el endpoint del servidor Plaspy, seleccionar el modo de transporte y verificar que el rastreador reporte correctamente.

- Configure el TK103B para usar el APN y las credenciales de datos móviles correctas según la SIM instalada.
- Apunte el equipo al endpoint de servidor de Plaspy para que los reportes se entreguen a la plataforma.
- Elija transporte UDP o TCP y configure el dispositivo para usar el puerto compartido de Plaspy.
- Valide la conectividad y confirme que el dispositivo aparezca en Plaspy después de guardar los ajustes.
- Opcionalmente ajuste el intervalo de reporte y habilite funciones adicionales como entradas digitales o reporte de combustible.

## Ajustes del servidor Plaspy

Use los siguientes ajustes de Plaspy al configurar el TK103B:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo entrante del rastreador.

## Requisitos típicos antes de la configuración

- Un equipo TK103B encendido con una tarjeta SIM activa capaz de GPRS y SMS.
- Acceso al APN del operador de la SIM, usuario y contraseña (si se requieren).
- Conocimiento del método de configuración por SMS del dispositivo o acceso a la herramienta de configuración del fabricante.
- La contraseña por defecto del rastreador para usar en comandos SMS (el valor público común es 123456 como se muestra abajo).
- Un entorno de prueba seguro donde pueda reiniciar el rastreador y verificar que reporte a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para GPRS, el TK103B enviará paquetes UDP o TCP al endpoint y puerto del servidor Plaspy. Plaspy recibe esos paquetes, identifica automáticamente el protocolo del rastreador y asocia el dispositivo con la cuenta del cliente para su visualización y monitoreo.

- El rastreador envía reportes periódicos de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse en UDP o TCP según la configuración del equipo y la red del operador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar su formato de mensaje nativo.
- Tras reportar, el dispositivo se vuelve visible en Plaspy y genera registros de posición y eventos para monitoreo.
- Se pueden habilitar mensajes de estado adicionales, como entradas digitales o eventos de sensor de combustible, mediante comandos de protocolo o sensor.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante, como comandos SMS o la herramienta del proveedor para el TK103B.
2. Ingrese d.plaspy.com o 54.85.159.138 como destino del servidor GPRS en la configuración del equipo.
3. Configure el puerto 8888 para la comunicación con el servidor.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir un modo de transporte.
5. Aplique o guarde la configuración en el equipo usando el método del fabricante (para SMS esto significa enviar los comandos).
6. Reinicie o apague y encienda el equipo si el fabricante lo exige para aplicar cambios de GPRS.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma; verifique la conectividad y el intervalo de envío.

## Comandos de configuración de ejemplo

El TK103B acepta comandos SMS públicos para muchos elementos de configuración. Los comandos a continuación provienen de la configuración pública del modelo y muestran el orden estándar utilizado para la configuración inicial. La contraseña del dispositivo usada en estos ejemplos es la predeterminada pública 123456. Mantenga los marcadores de posición cuando los reemplace con los valores de su operador.

1. Restablecer a valores de fábrica (paso inicial opcional)
```sms
begin123456
```

2. Establecer la zona horaria a UTC 0
```sms
time zone123456 0
```

3. Configurar el APN del operador
```sms
apn123456 {{apn}}
```
- {{apn}} es un marcador de posición para la cadena APN de su operador móvil.

4. Establecer usuario y contraseña del APN
```sms
up123456 {{apnu}} {{apnp}}
```
- {{apnu}} es el usuario del APN y {{apnp}} la contraseña del APN. Si su operador no requiere credenciales, a menudo pueden dejarse vacíos.

5. Configurar el servidor GPRS a la IP y puerto de Plaspy
```sms
adminip123456 54.85.159.138 8888
```
- También puede usar d.plaspy.com en lugar de la IP si el dispositivo acepta un dominio.

6. Establecer el intervalo de actualización (formato de ejemplo de los comandos públicos)
```sms
fix060s060s***n123456
```
- Este comando configura el tiempo periódico de fijado/reportes; conserve la sintaxis original al enviarlo.

7. Cambiar el modo GPRS para seleccionar UDP o TCP
```sms
gprs123456,1,1
```
o
```sms
gprs123456
```
- La primera forma es una manera común de seleccionar el transporte; consulte las notas de firmware del dispositivo para el significado exacto de los parámetros.

Verificación y comandos opcionales de sensor:

- Revisar la configuración actual
```sms
check123456
```

- Habilitar estado de sensor de combustible o mejorar el reporte de sensores digitales (ejemplo público)
```sms
protocol123456 18
```

Nota: Mantenga la contraseña por defecto del dispositivo 123456 a menos que usted la haya cambiado. Si su equipo usa otra contraseña, reemplace 123456 por la contraseña correcta en cada comando.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS y los parámetros disponibles; confirme con el manual del equipo o la documentación del proveedor.
- El TK103B admite la configuración por SMS como se muestra en los comandos públicos; las herramientas de instalador o el software para PC pueden ofrecer métodos alternativos de configuración.
- El comportamiento TCP frente a UDP puede afectar la entrega de paquetes y el paso por firewalls; elija el transporte que funcione mejor con su red y operador.
- Plaspy acepta conexiones por dominio o IP en el puerto 8888 y detecta automáticamente el protocolo del rastreador, así que apunte el equipo a d.plaspy.com o 54.85.159.138 y use el puerto 8888.
- Si cambia la contraseña del dispositivo desde la predeterminada, actualice sus plantillas de comando y sus pasos de verificación en consecuencia.

## Por qué usar Plaspy con esta configuración

Usar el TK103B con Plaspy ofrece una manera práctica de reunir en una sola plataforma los datos de ubicación, estado y eventos de los vehículos para monitoreo, rutas y supervisión operativa. Los comandos SMS públicos le permiten preparar el rastreador para que reporte de forma segura al servidor de Plaspy y la telemetría aparezca en la plataforma para seguimiento y análisis.

Para obtener más información sobre Plaspy y cómo funciona esta integración, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, notas de firmware y detalles del fabricante del Coban TK103B, verifique la información actual en el sitio oficial del fabricante https://www.coban.net/.
