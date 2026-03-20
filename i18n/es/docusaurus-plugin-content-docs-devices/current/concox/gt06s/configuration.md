---
slug: /concox/gt06s/configuration
id: gt06s-configuration
sidebar_label: Configuration
title: Concox - GT06S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox GT06S para compatibilidad con Plaspy, con ajustes de servidor, comandos SMS y pasos prácticos de conexión
keywords:
  - Configuración Concox GT06S
  - Configuración GT06S Plaspy
  - Configuración servidor Concox GT06S
  - Comandos SMS GT06S
  - Configuración rastreador GPS Concox
  - Rastreo de flotas GT06S
  - Configuración rastreador Plaspy
  - Configuración GPS vehicular
  - Configuración GPRS GT06S
  - Integración rastreador Concox
---

# Concox - Configuración del GT06S

Esta página describe el contexto público de configuración para usar el rastreador Concox GT06S con Plaspy. Explica los ajustes de servidor que Plaspy requiere, resume el flujo típico de puesta en marcha y enumera los comandos SMS de configuración publicados para el GT06S, de modo que pueda preparar el dispositivo para enviar datos a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante para configurar el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía junto con la documentación del fabricante del GT06S para obtener instrucciones específicas y actualizadas del dispositivo.

## Resumen de la configuración

La configuración prepara el GT06S para registrarse y transmitir datos de ubicación y eventos a Plaspy, de modo que los equipos aparezcan y reporten de forma fiable en la plataforma. Las tareas habituales incluyen establecer el APN del operador, apuntar el rastreador al endpoint de Plaspy, seleccionar el transporte si es necesario y verificar los intervalos de reporte.

- Apuntar el dispositivo al endpoint de Plaspy para que los datos lleguen a la plataforma en la nube
- Configurar el APN y el modo GPRS para que el dispositivo tenga conectividad de datos móviles
- Establecer el intervalo de reporte para que Plaspy reciba actualizaciones con la frecuencia deseada
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy tras la configuración
- Usar SMS o las herramientas del fabricante para configuración remota en instalaciones de campo

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una tarjeta SIM operativa con datos habilitados y la información de APN correcta del operador móvil
- Dispositivo encendido y accesible para recibir SMS o mediante la herramienta de configuración del fabricante
- Conocer el IMEI o identificador del dispositivo para poder asociar el rastreador al activo en Plaspy
- Cobertura celular GSM en el lugar de instalación para la conectividad GPRS
- Acceso a los comandos SMS del Concox GT06S o al software de configuración que provea el proveedor
- Una cuenta en Plaspy o información de aprovisionamiento para confirmar que el dispositivo es visible después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GT06S envía datos de ubicación y eventos vía GPRS al endpoint del servidor Plaspy usando la dirección y el puerto configurados. Una vez apuntado a Plaspy, el dispositivo sube fijaciones de posición y actualizaciones de estado en el intervalo establecido para que los administradores de flota puedan monitorear los vehículos en tiempo real.

- El dispositivo transmite fixes GNSS y datos de eventos a d.plaspy.com o a la IP del servidor Plaspy en el puerto 8888
- Plaspy recibe la telemetría y mapea el rastreador para visibilidad en vivo e informes históricos
- Alertas y eventos como cambio de ignición, acciones de inmovilizador o notificaciones de manipulación aparecen en Plaspy
- La plataforma detecta automáticamente el protocolo del rastreador, por lo que no es necesario mapear el protocolo manualmente
- Todos los dispositivos usan el mismo puerto de Plaspy, lo que simplifica el aprovisionamiento masivo y las plantillas

## Flujo común de configuración

1. Obtenga el método de configuración oficial de Concox para el GT06S, ya sea comandos SMS o software del proveedor
2. Configure el APN del dispositivo con los datos del operador para establecer la conexión GPRS
3. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 en los ajustes del dispositivo
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte
5. Aplique o guarde la configuración y active el modo GPRS en el rastreador
6. Reinicie el dispositivo si el fabricante recomienda un reinicio para que los ajustes surtan efecto
7. Valide que el GT06S reporte a Plaspy verificando la visibilidad del dispositivo y posiciones recientes en la plataforma

## Comandos de configuración de ejemplo

El GT06S soporta configuración vía SMS. Los siguientes comandos SMS de uso público se presentan en el orden común durante la puesta en marcha. Tenga en cuenta que el comando de restablecimiento de fábrica es opcional y debe usarse solo si necesita devolver el equipo a los ajustes predeterminados.

- Reinicio de fábrica opcional
```
FACTORY#
```

- Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador
Use el APN de su operador y, opcionalmente, el usuario y la contraseña del APN. Reemplace [apn] por el APN de su operador. Si es necesario incluya [apnu] y [apnp] como usuario y contraseña.
```
APN,[apn]# 
```
o con usuario y contraseña
```
APN,[apn],[apnu],[apnp]#
```

- Configurar el servidor GPRS usando dominio (recomendado)
Este ejemplo apunta el dispositivo al dominio de Plaspy y al puerto 8888. Use esta forma para registrar el nombre de dominio en el dispositivo.
```
SERVER,1,d.plaspy.com,8888,0#
```

- O configurar el servidor GPRS usando IP
Este ejemplo apunta el dispositivo directamente a la IP del servidor Plaspy y al puerto 8888.
```
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización a 60 segundos
Se muestran dos formatos de temporizador comunes. Use el que soporte su firmware.
```
TIMER,60#
```
o
```
TIMER,60,60#
```

- Habilitar modo GPRS
```
GPRSON,1#
```

- Verificar parámetros configurados
```
GPRSSET#
```

Estos comandos son los pasos de configuración SMS públicos publicados para el GT06S. Mantenga los marcadores de posición cuando envíe los comandos y sustitúyalos por sus credenciales reales del operador.

## Notas sobre la configuración

- La configuración vía SMS es compatible y se usa habitualmente en instalaciones de campo donde el equipo no está conectado a una PC
- Diferencias en la versión de firmware o la revisión de hardware pueden cambiar la sintaxis de comandos o nombres de parámetros; consulte la documentación del fabricante si un comando no es reconocido
- Elija UDP o TCP según las políticas de su sitio y el soporte del firmware del dispositivo; Plaspy acepta ambos en el puerto compartido 8888 y gestiona automáticamente la detección de protocolo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica aprovisionamientos y plantillas masivas
- Mantenga seguros los marcadores de APN, usuario y contraseña y verifique las credenciales del operador antes de enviar SMS de configuración

## Por qué usar Plaspy con esta configuración

Usar el GT06S con Plaspy ofrece una forma directa de recoger telemetría de ubicación y eventos en tiempo real desde un rastreador vehicular compacto. Cuando se configura para apuntar al endpoint de Plaspy, el dispositivo sube posiciones y actualizaciones de estado que alimentan paneles, alertas e informes históricos para apoyar las operaciones de flota y los procesos de seguridad.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the latest device specific configuration commands firmware notes and official documentation verify details on the Concox website https://www.iconcox.com/ since manufacturer setup methods and firmware behavior can change over time.
