---
slug: /condor/th_923/configuration
id: th_923-configuration
sidebar_label: Configuration
title: Condor - TH-923 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Condor TH-923 con ajustes de servidor Plaspy, comandos SMS y flujo de instalación
keywords:
  - Condor TH-923
  - Configuración TH-923
  - Configuración del rastreador Condor
  - TH-923 Plaspy
  - Configuración de rastreador Plaspy
  - Configuración de rastreador GPS
  - Configuración de seguimiento de flotas
  - Configuración de seguimiento de vehículos
  - Configuración de rastreador de activos
  - Configuración de rastreador marítimo
---

# Condor - Configuración TH-923

Esta página documenta el contexto público de configuración para usar el Condor TH-923 con la plataforma de rastreo Plaspy. Se enfoca en los ajustes prácticos del servidor y en los comandos SMS públicos utilizados para apuntar un dispositivo TH-923 compatible a Plaspy, de modo que el equipo pueda enviar ubicación y telemetría a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía presenta los valores públicos y prácticos y los ejemplos de comandos SMS que figuran en el material de configuración del dispositivo para ayudarle a integrar el TH-923 con Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el TH-923 para comunicarse de forma fiable con Plaspy, verificar que el dispositivo puede alcanzar la plataforma y habilitar la visibilidad del activo en los paneles y reportes de Plaspy.

- Configure los ajustes de red del TH-923 para que reporte al endpoint y puerto compartidos de Plaspy.
- Establezca el APN y los parámetros GPRS para que el dispositivo pueda abrir una sesión de datos y enviar telemetría.
- Use los comandos SMS proporcionados para aplicar servidor, intervalo, zona horaria e identificador cuando el equipo lo soporte.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy tras la configuración.
- Asegúrese de que los identificadores y credenciales del dispositivo coincidan con su inventario y sus prácticas de seguridad.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

Estos valores son el endpoint y puerto públicos de Plaspy que debe ingresar al configurar el TH-923 para que el dispositivo envíe posición y telemetría a la plataforma.

## Requisitos típicos antes de configurar

- Un dispositivo TH-923 con alimentación, tarjeta SIM activa y permisos de datos para GPRS cuando se use conexión celular.
- Acceso a un teléfono que envíe SMS o a la herramienta de configuración autorizada del fabricante para enviar los comandos de instalación si utiliza configuración por SMS.
- El IMEI del dispositivo y una forma de derivar o confirmar el identificador de cinco dígitos (el equipo suele usar los últimos cinco dígitos del IMEI).
- Conocimiento del APN del operador y, opcionalmente, del usuario y la contraseña del APN para la SIM instalada.
- La contraseña por defecto del dispositivo para configuración por SMS según el material público (ejemplo de contraseña por defecto 0000).
- Un plan para probar y validar que el TH-923 reporta a Plaspy después de aplicar los ajustes.

## Cómo se conecta este rastreador a Plaspy

El TH-923 se configura para enviar datos de ubicación y eventos a Plaspy apuntando sus ajustes de servidor GPRS al endpoint y puerto de Plaspy. Plaspy recibe las conexiones entrantes e identifica automáticamente el protocolo del rastreador, de modo que el dispositivo puede entregar telemetría sin necesidad de seleccionar manualmente el protocolo por dispositivo en la plataforma.

- El equipo envía actualizaciones de posición y estado al endpoint y puerto del servidor Plaspy indicados arriba.
- La telemetría se entrega por el transporte elegido (UDP o TCP) dependiendo de la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo entrante, por lo que el mismo servidor y puerto funcionan para los tipos de dispositivos soportados.
- Eventos como activaciones de geocerca, movimiento u otras señales de sensores se transmiten a Plaspy conforme el dispositivo los reporte.
- Una configuración correcta permite visibilidad en mapas, historial y alertas dentro de la plataforma Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Condor para el TH-923, como los comandos SMS del fabricante o la herramienta de configuración autorizada.
2. Introduzca el dominio o IP del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el campo de servidor del dispositivo.
3. Configure el puerto a 8888 en los ajustes de servidor del equipo.
4. Elija transporte UDP o TCP si el dispositivo requiere seleccionar un tipo de transporte.
5. Configure el APN, el identificador del dispositivo (alias), la zona horaria, el intervalo de actualizaciones y habilite el modo GPRS según sea necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante o del equipo lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando entradas en la plataforma o usando el comando SMS de verificación del dispositivo.

## Comandos de configuración de ejemplo

El material público de configuración del TH-923 incluye comandos SMS que pueden enviarse al dispositivo para establecer APN, servidor, intervalo, zona horaria, alias y verificar la conexión. Los comandos que siguen conservan los marcadores de posición tal como aparecen en el material público. Envíe cada comando por SMS al número del dispositivo. El ejemplo usa la contraseña por defecto de configuración SMS 0000 según el material público.

- Establecer el APN del operador. Reemplace {{apn}} con el APN del operador. Si el APN requiere usuario y contraseña incluya {{apnu}} y {{apnp}}.

```
APN,0000,{{apn}}
```

Forma opcional con usuario y contraseña del APN:

```
APN,0000,{{apn}},{{apnu}},{{apnp}}
```

- Establecer un identificador de 5 dígitos (alias). Use los últimos cinco dígitos del IMEI en lugar de {{imei_last5}}:

```
ALIAS,0000,{{imei_last5}}#
```

- Establecer la zona horaria a UTC 0 (ejemplo):

```
GMT,0000,-0#
```

- Establecer el servidor GPRS para apuntar el dispositivo a Plaspy. Este ejemplo usa la IP pública de Plaspy, el puerto y la bandera de transporte como en los comandos públicos:

```
SERVIDOR,0000,54.85.159.138,8888,U,A#
```

- Establecer el intervalo de actualización (el ejemplo público establece un intervalo equivalente a una actualización por minuto):

```
INTERVALO,0000,M,6#
```

- Habilitar modo GPRS:

```
GPRS,0000,A#
```

- Verificar la conexión y los ajustes del dispositivo:

```
CONEXION,0000#
```

Notas sobre marcadores de posición y valores:
- {{apn}} es el APN del operador móvil para la SIM instalada.
- {{apnu}} y {{apnp}} son los marcadores de usuario y contraseña del APN; inclúyalos solo si el operador lo requiere.
- {{imei_last5}} representa los últimos cinco dígitos del IMEI; el material público recomienda usar esos dígitos como identificador del equipo.
- La contraseña por defecto de configuración SMS en el material público es 0000; verifique si su dispositivo tiene una contraseña diferente antes de enviar comandos.

## Notas de configuración

- El TH-923 soporta configuración por SMS como se muestra en los comandos públicos; puede usar SMS o una herramienta autorizada del fabricante según la disponibilidad.
- Las revisiones de firmware y las variantes regionales pueden cambiar el formato de los comandos o su comportamiento; confirme la sintaxis exacta con la documentación del dispositivo si tiene dudas.
- Al elegir transporte, UDP y TCP están disponibles según el conjunto de comandos del equipo; Plaspy acepta cualquiera de los dos y detectará el protocolo automáticamente en el puerto 8888.
- Asegúrese de que la SIM instalada tenga datos y GPRS habilitado cuando se use conexión celular; los ajustes APN deben coincidir con el operador móvil.
- Pruebe la conectividad después de la configuración usando el comando CONEXION y verificando que el dispositivo aparezca en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Condor TH-923 con Plaspy permite a las organizaciones mantener visibilidad continua sobre activos que operan en entornos de cobertura mixta. Al configurar el TH-923 para que reporte al servidor y puerto compartidos de Plaspy, los operadores pueden recibir historial de ubicación, alertas y telemetría en una plataforma única que reconoce automáticamente el protocolo del dispositivo. Esto es especialmente valioso para activos que requieren conectividad resistente, como embarcaciones marítimas, cargas de larga distancia y equipos en sitios remotos.

Aprenda más sobre Plaspy y cómo la plataforma puede integrarse con dispositivos como el TH-923 en https://www.plaspy.com. Los métodos de configuración específicos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique las instrucciones y la sintaxis de comandos más recientes en el sitio del fabricante https://condorskyseeker.com/ antes de desplegar.
