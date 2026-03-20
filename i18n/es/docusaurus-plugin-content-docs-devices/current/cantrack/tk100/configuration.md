---
slug: /cantrack/tk100/configuration
id: tk100-configuration
sidebar_label: Configuration
title: CanTrack - TK100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el rastreador CanTrack TK100 y compatibilidad con Plaspy, incluyendo ajustes de servidor y pasos prácticos de instalación
keywords:
  - configuración CanTrack TK100
  - instalación CanTrack TK100
  - CanTrack TK100 Plaspy
  - configuración servidor TK100
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración rastreo de flotas
  - configuración GPRS TK100
  - configuración SMS TK100
  - integración rastreador Plaspy
---

# CanTrack - Configuración del TK100

Esta página describe el contexto público de configuración para usar el CanTrack TK100 con la plataforma de gestión de flotas Plaspy. Resume los ajustes de servidor compartidos que Plaspy espera, qué verificar antes de comenzar y los pasos prácticos más habituales para apuntar un TK100 a Plaspy y obtener reporte en tiempo real y visibilidad de eventos.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use las indicaciones aquí para los valores y el flujo de trabajo específicos de Plaspy; consulte la documentación oficial de CanTrack para comandos de dispositivo y detalles de firmware específicos.

## Resumen de configuración

Preparar un TK100 para integrarlo con Plaspy se centra en configurar el equipo para que reporte al endpoint compartido de Plaspy y validar que el dispositivo envíe correctamente ubicación y eventos. El objetivo es que el rastreador aparezca en los paneles de Plaspy y que la telemetría y las alertas lleguen de forma fiable.

- Configure el TK100 para enviar reportes por GPRS o SMS al endpoint del servidor de Plaspy usando los ajustes de transporte compartidos.
- Verifique que la tarjeta SIM del dispositivo funcione y cuente con datos y SMS si el medio elegido lo requiere.
- Confirme que el dominio y el puerto del servidor se aplicaron y guardaron en el dispositivo para que Plaspy reciba la telemetría.
- Valide la conexión y el envío comprobando que los eventos del dispositivo lleguen a Plaspy después de aplicar la configuración.
- Asegúrese de que ajustes del fabricante o del instalador como el APN o el formato de comandos SMS estén correctos para su operador y firmware.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe establecerse como destino para el reporte cuando se use modo dominio.
- La IP del servidor 54.85.159.138 puede utilizarse como endpoint alternativo cuando la herramienta de configuración requiera una dirección IP.
- El puerto 8888 es el puerto de recepción de Plaspy y debe configurarse en el rastreador.
- El transporte puede ser UDP o TCP; seleccione el que requiera su equipo si existe una opción.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usen el mismo puerto pueden ser ingresados sin selección de protocolo adicional en la plataforma.
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que 8888 es consistente entre los modelos soportados.

## Requisitos típicos antes de configurar

- Un CanTrack TK100 instalado físicamente o con alimentación para realizar la configuración.
- Una tarjeta SIM compatible con servicio activo de datos y SMS si planea usar GPRS o mensajería.
- Acceso al método de configuración oficial del fabricante, ya sea comandos SMS, herramienta USB/serial o software del proveedor.
- Conocimiento del APN del operador y de las credenciales necesarias para habilitar GPRS en el dispositivo.
- Cobertura GSM en el sitio de instalación y la capacidad de enviar y recibir SMS para verificación si se requiere.
- Acceso a su cuenta de Plaspy o al espacio de administración de flota para confirmar que el dispositivo aparece tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK100 envía datos de posición y eventos al endpoint y puerto compartidos de Plaspy para que los operadores puedan ver ubicación en tiempo real, eventos e historial en la plataforma. El rastreador puede usar GPRS TCP/IP para reportes continuos y SMS para alarmas o comandos remotos según la configuración.

- El TK100 debe apuntar a d.plaspy.com o a 54.85.159.138 y usar el puerto 8888 para telemetría.
- GPRS TCP/IP se usa comúnmente para actualizaciones continuas de ubicación, mientras que SMS puede servir para alertas o como mecanismo de respaldo.
- Eventos como estado de encendido, exceso de velocidad, activación de geocercas, SOS y corte de alimentación se envían a Plaspy para notificación y registro.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que una vez que los datos llegan al servidor y puerto compartidos se asocian con el tipo de dispositivo correcto.
- Una conexión exitosa habilita la visibilidad en el mapa en vivo, la reproducción histórica y las reglas de alerta dentro de Plaspy.

## Flujo común de configuración

1. Acceda al método de configuración oficial de CanTrack o al software provisto por el fabricante o instalador.
2. Asegúrese de que el TK100 tenga una SIM operativa con datos habilitados y que el APN esté configurado correctamente para su operador.
3. Ingrese la información del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
4. Configure el puerto de destino en 8888, que es el puerto utilizado por todos los dispositivos soportados por Plaspy.
5. Si el TK100 requiere seleccionar transporte, elija UDP o TCP según las opciones del equipo y condiciones de la red.
6. Aplique o guarde la configuración y, si procede, reinicie o haga ciclo de alimentación del dispositivo para activar los ajustes.
7. Valide que el dispositivo reporte a Plaspy verificando la llegada de datos y eventos en su espacio de trabajo de flota.

## Ejemplos de comandos de configuración

El CanTrack TK100 admite configuración mediante herramientas del fabricante y comandos SMS; la sintaxis exacta puede variar según el firmware y el manual del usuario oficial. Plaspy requiere que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y use el puerto 8888. Dado que los conjuntos de comandos del fabricante están sujetos a variaciones de firmware, esta página no incluye cadenas SMS específicas; consulte el manual oficial de CanTrack o a su proveedor para el formato exacto si va a configurar el equipo por SMS.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos y las opciones disponibles. Confirme la versión de firmware y consulte el manual de CanTrack para comandos específicos por versión.
- Elija TCP o UDP según el soporte del dispositivo y la fiabilidad de la red. Plaspy acepta ambos, pero el comportamiento como manejo de sesiones puede variar según el transporte.
- Asegúrese de que el APN y las credenciales del operador sean correctas antes de probar la conectividad GPRS con Plaspy.
- La configuración y el reporte por SMS siguen siendo una opción para alertas o comandos remotos cuando GPRS es poco confiable.
- Debido a que Plaspy usa el mismo puerto para todos los dispositivos y detección automática de protocolo, mantener una configuración de servidor y puerto consistente facilita la incorporación de flotas.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack TK100 para que reporte a Plaspy proporciona visibilidad centralizada de la ubicación del vehículo, estado de encendido, alarmas y telemetría histórica. Para operadores de flota y proveedores de servicio, apuntar el TK100 al endpoint compartido de Plaspy incorpora rápidamente los vehículos a un panel operativo para despacho, alertas y análisis sin la necesidad de gestionar servidores por dispositivo.

Aprenda más sobre Plaspy y cómo se integra con rastreadores como el TK100 en https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, listas de comandos SMS y detalles de firmware consulte la documentación del fabricante en https://www.cantrackgps.com/ para verificar métodos de configuración y sintaxis de comandos actuales.
