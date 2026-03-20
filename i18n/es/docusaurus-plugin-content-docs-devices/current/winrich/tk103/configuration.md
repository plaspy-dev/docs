---
slug: /winrich/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: Winrich - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Winrich TK103 para seguimiento en tiempo real con Plaspy con ajustes de servidor compartido y guía de SMS
keywords:
  - Configuración Winrich TK103
  - Configuración TK103
  - Configuración servidor TK103
  - Configuración plataforma GPS TK103
  - Compatibilidad Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración GPRS TK103
  - Comandos SMS TK103
  - Configuración seguimiento de flotas
---

# Winrich - Configuración del TK103

Esta página documenta el contexto público de configuración para conectar el Winrich TK103 con la plataforma de seguimiento Plaspy. Reúne pasos prácticos y comandos públicos usados para apuntar un TK103 a Plaspy y validar el reporte básico por GPRS o SMS cuando el dispositivo lo soporta.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el equipo del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TK103 admite configuración por SMS y por GPRS; los ejemplos de comandos SMS que se muestran a continuación son públicos y ejemplifican el flujo común para establecer el APN, el servidor de Plaspy, el intervalo de reporte y las comprobaciones de verificación.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el TK103 para que se comunique de forma fiable con Plaspy y el dispositivo aparezca y actualice en la plataforma. Para los TK103 esto normalmente implica verificar alimentación y conectividad celular, aplicar APN y ajustes de servidor, y comprobar que el dispositivo envíe actualizaciones de posición a Plaspy.

- Configure el APN y los parámetros GPRS para que el TK103 pueda usar datos móviles en reportes en tiempo real.
- Apunte el rastreador al endpoint compartido de Plaspy para que las posiciones lleguen a la plataforma.
- Establezca el intervalo de reporte según las necesidades operativas y las restricciones de batería o datos.
- Use comprobaciones por SMS o consultas de estado del dispositivo para confirmar ajustes y reportes en vivo.
- Valide la visibilidad en Plaspy tras la configuración para asegurar que mapas y alertas de la plataforma reciban datos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para los dispositivos compatibles

Estos valores son los ajustes públicos del endpoint de Plaspy que usará al configurar el TK103. El dispositivo puede apuntar usando el dominio o la IP cuando el firmware lo permita, y el transporte puede ser UDP o TCP en el puerto 8888.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado o alimentado temporalmente para la configuración
- SIM activa con plan de datos y capacidad de SMS insertada en el rastreador
- Credenciales APN correctas del operador móvil disponibles para la configuración
- Capacidad para enviar y recibir SMS hacia el dispositivo para los comandos de configuración por SMS
- Acceso a la documentación del fabricante o a la herramienta de terminal para confirmar la sintaxis de comandos y el comportamiento del firmware
- Una cuenta en Plaspy o acceso de administrador para validar el rastreador después de que empiece a reportar

## Cómo se conecta este rastreador a Plaspy

Cuando un TK103 se configura para Plaspy, envía mensajes de ubicación y estado por GPRS/Internet al endpoint y puerto compartidos de Plaspy. Si GPRS no está disponible, el TK103 puede usar SMS para notificaciones esenciales y verificación de configuración según lo permita el dispositivo.

- El rastreador reporta posiciones al endpoint d.plaspy.com o a 54.85.159.138 en el puerto 8888
- El transporte de datos usa UDP o TCP según la configuración del dispositivo y las condiciones de la red
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos para enrutar e interpretar los mensajes
- La plataforma muestra posiciones en tiempo real, alertas y reproducción histórica una vez validado el reporte
- El SMS sigue siendo un canal útil como respaldo para configuración, comprobaciones de estado y alertas de emergencia

## Flujo de configuración común

1. Acceda al método oficial de configuración del fabricante o al software y revise la sintaxis de comandos específica del modelo o las herramientas disponibles.
2. Asegúrese de que la tarjeta SIM esté activa y configure el APN del operador en el TK103.
3. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138.
4. Configure el puerto en 8888 como el puerto del servidor GPRS del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo exige.
7. Valide que el dispositivo reporte a Plaspy revisando mapas, alertas o mediante comandos de estado del dispositivo.
8. Use comandos de verificación por SMS si están disponibles para confirmar los ajustes en el rastreador antes del despliegue completo.

## Comandos de configuración de ejemplo

El TK103 soporta configuración por SMS. Los siguientes comandos públicos muestran el orden común utilizado para preparar un dispositivo para Plaspy. Envíelos como mensajes SMS de texto plano al número de la SIM del rastreador.

1. Reinicio opcional a configuración de fábrica (usar solo si es necesario antes de la configuración)
```text
940#
```

2. Ajustar la zona horaria a UTC 0
```text
801#W0#
```

3. Establecer el APN del operador
```text
802#[apn]#[apnu]#[apnp]#
```
- [apn] es el nombre del punto de acceso de la red para el operador de la SIM
- [apnu] es el nombre de usuario del APN si el operador lo requiere
- [apnp] es la contraseña del APN si el operador lo requiere
- Si su operador solo requiere un APN, envíe el APN y omita el usuario y la contraseña según lo permita su dispositivo

4. Configurar el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy
```text
803#54.85.159.138#8888#
```
- Si el firmware del TK103 admite nombres de dominio puede reemplazar la IP con d.plaspy.com:
```text
803#d.plaspy.com#8888#
```

5. Establecer el intervalo de actualización a 60 segundos
```text
730#60#
```

6. Comprobar la configuración actual en el dispositivo
```text
886#
```

7. Consultar el estado del dispositivo
```text
902#
```

Mantenga el orden anterior donde los ajustes iniciales de red y servidor son necesarios antes de habilitar reportes frecuentes. Use la documentación del fabricante para confirmar el formato exacto de SMS según la versión de firmware.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones disponibles; confirme los comandos según el firmware instalado en su equipo.
- El TK103 admite configuración por SMS como se muestra arriba; el SMS es útil para configuraciones remotas o cuando no hay acceso temporal a una terminal.
- Elija UDP o TCP según la fiabilidad de la red y el comportamiento del operador; Plaspy acepta cualquiera de los dos en el puerto 8888 y detectará automáticamente el protocolo.
- Asegúrese de que las credenciales APN sean correctas para que la SIM pueda establecer una sesión GPRS.
- Pruebe con intervalos de reporte cortos al principio y luego ajuste al intervalo de producción para balancear consumo de datos y necesidades operativas.

## Por qué usar Plaspy con esta configuración

Usar el TK103 con Plaspy brinda una vía operacionalmente simple para obtener visibilidad en tiempo real de vehículos y recibir alertas. Configurar el rastreador para que reporte al endpoint y puerto compartidos de Plaspy permite a los administradores de flota ver actualizaciones de ubicación en vivo, recibir alarmas y revisar trayectos históricos desde una plataforma centralizada sin la complejidad de configurar un servidor por dispositivo.

Para saber más sobre Plaspy y cómo soporta rastreadores como el Winrich TK103 visite https://www.plaspy.com. Los métodos específicos de configuración de dispositivos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de configuración más reciente en el sitio oficial de Winrich http://www.winrichgroup.com/en/ antes de despliegues a gran escala.
