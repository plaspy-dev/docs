---
slug: /navtelekom/signal_s_2115/configuration
id: signal_s_2115-configuration
sidebar_label: Configuration
title: Navtelekom - Signal S-2115 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Navtelekom Signal S-2115 para Plaspy con los datos públicos de servidor y guía práctica de puesta en marcha
keywords:
  - Configuración Navtelekom Signal S-2115
  - Configuración inicial Navtelekom Signal S-2115
  - Configuración Signal S-2115 para Plaspy
  - Configuración de servidor Signal S-2115
  - Configuración rastreador GPS Navtelekom
  - Configuración software de rastreo Signal S-2115
  - Configuración seguimiento vehicular Navtelekom
  - Configuración de plataforma Signal S-2115
  - Configuración de rastreador Plaspy
  - Guía de configuración rastreador GPS
---

# Navtelekom - Configuración Signal S-2115

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom Signal S-2115 con Plaspy. Se enfoca en la información práctica de servidor y flujo de trabajo necesaria para apuntar el equipo a Plaspy, verificar la conectividad y habilitar la visibilidad en la plataforma. El Signal S-2115 es un sistema de monitoreo GSM con posicionamiento GPS y GLONASS, detección por acelerómetro, reporte de alarmas, opciones de alerta por SMS y voz, salidas remotas y varias vías de configuración por parte del fabricante, como USB y comandos SMS.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de las unidades solo requieren el endpoint y el transporte correctos configurados en el dispositivo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía aquí para aplicar los ajustes públicos del servidor de Plaspy y consulte la documentación de Navtelekom o las herramientas del proveedor para los comandos específicos del dispositivo.

## Resumen de la configuración

Este proceso prepara al Signal S-2115 para enviar su posición y eventos a Plaspy, verifica la conectividad y asegura que el dispositivo aparezca correctamente en el panel de Plaspy. El objetivo es establecer un canal de datos fiable desde el rastreador hasta el servidor compartido de Plaspy para que las actualizaciones de ubicación, las alarmas y el estado básico del equipo sean recibidos por la plataforma.

- Configure el dispositivo para que reporte al endpoint del servidor de Plaspy y así la plataforma reciba las actualizaciones de rastreo.
- Seleccione la opción de transporte y el puerto correctos según lo requiera el firmware del equipo.
- Confirme alimentación, SIM y disponibilidad de red para que el rastreador pueda enviar sus primeros reportes.
- Valide que el dispositivo sea visible en Plaspy y confirme que se reciben actualizaciones periódicas y eventos de alarma.
- Use las herramientas del fabricante, como el software de configuración por USB o comandos SMS, para aplicar y guardar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte: el dispositivo puede ser configurado usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que se aplica un único valor de puerto a los rastreadores soportados

## Requisitos típicos antes de la configuración

- Confirme que el Signal S-2115 esté alimentado e instalado según las instrucciones del fabricante.
- Tenga acceso al método de configuración requerido por su unidad, como el software de configuración por USB, comandos SMS o herramientas del proveedor.
- Asegúrese de contar con una tarjeta SIM activa y cobertura GSM si el equipo usa datos móviles o SMS para la configuración y el reporte.
- Disponga del identificador del dispositivo o IMEI para su registro y verificación en Plaspy.
- Esté preparado para reiniciar el equipo después de aplicar los ajustes de servidor si el firmware requiere reboot para aplicar cambios de red.

## Cómo se conecta este rastreador a Plaspy

El Signal S-2115 se configura para enviar su posición y datos de eventos al endpoint y puerto compartidos de Plaspy. Una vez establecido el endpoint y el transporte correctos, Plaspy recibe los mensajes del dispositivo y los asocia con el registro del rastreador configurado, por lo que la ubicación, las alarmas y los eventos de estado se hacen visibles en la plataforma.

- El rastreador reporta datos de posicionamiento GPS y GLONASS al endpoint de Plaspy.
- Los eventos del acelerómetro y los disparos de alarma pueden enviarse a la plataforma para monitoreo.
- Los reportes del dispositivo se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP según la configuración.
- Plaspy detecta automáticamente el protocolo del equipo y procesa los mensajes entrantes para su visualización y alertas.
- Una vez activo el reporte, Plaspy muestra la ubicación del dispositivo y el historial de eventos para supervisión operativa.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Navtelekom para su Signal S-2115, por ejemplo la utilidad de configuración por USB, el conjunto de comandos SMS o la herramienta de aprovisionamiento del proveedor.
2. En la sección de ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo a 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los equipos soportados.
4. Elija el protocolo de transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el software del equipo o envíe el comando SMS correspondiente si utiliza la configuración por SMS.
6. Reinicie el dispositivo si el firmware o la herramienta de configuración lo solicita para activar los nuevos ajustes.
7. Valide que el Signal S-2115 esté reportando a Plaspy verificando la presencia del equipo y las últimas actualizaciones de ubicación en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para el Signal S-2115 dependen del firmware y de las herramientas del fabricante. Algunas unidades aceptan comandos SMS, mientras que otras se configuran mediante la utilidad USB de Navtelekom. Dado que los juegos de comandos son específicos por modelo, consulte el manual de Navtelekom para la sintaxis exacta. Los pasos públicos comunes incluyen enviar los ajustes de servidor y puerto ya sea a través de la herramienta de configuración o por SMS con marcadores de posición para APN o credenciales cuando el equipo lo requiera.

Si cuenta con comandos SMS proporcionados por el proveedor para el Signal S-2115, use el manual del fabricante para formatearlos correctamente e incluya marcadores como {{apn}} si el dispositivo requiere un APN. Los ejemplos de comandos que suelen aparecer en la documentación del fabricante tienen este formato (reemplace los marcadores por sus valores):

```text
SERVER,d.plaspy.com,8888
```

o con IP

```text
SERVER,54.85.159.138,8888
```

Si su equipo utiliza una sintaxis SMS con marcadores para APN o autenticación, conserve los marcadores tal como aparecen en la guía del fabricante, por ejemplo {{apn}} {{apnu}} o {{apnp}}, y reemplácelos por los valores de su plan SIM. Consulte el manual de Navtelekom para los formatos exactos de SMS o comandos USB que correspondan a su firmware.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los nombres de menú exactos, los formatos de comandos SMS y los transportes disponibles; verifique los comandos en el manual del dispositivo para su unidad.
- Si hay opción, tanto UDP como TCP pueden usarse para conectar con d.plaspy.com en el puerto 8888; elija el transporte recomendado para su instalación o red.
- El Signal S-2115 soporta alertas por SMS y voz según las especificaciones del fabricante, por lo que la configuración por SMS puede estar disponible para la puesta en marcha en algunos despliegues.
- Confirme siempre los datos del APN y del plan de la SIM si el rastreador requiere datos móviles para el reporte o la configuración remota.
- Guarde una copia del IMEI del dispositivo y cualquier respaldo de configuración por si necesita reaplicar ajustes o solucionar conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Signal S-2115 con Plaspy ofrece a las organizaciones una forma práctica de centralizar datos de ubicación, alarmas y eventos de dispositivos Navtelekom en una única plataforma de monitoreo vehicular. El endpoint compartido de Plaspy y la detección automática de protocolo simplifican la integración para que instaladores y administradores puedan concentrarse en la ubicación del equipo, la alimentación y la disponibilidad de red en lugar de configuraciones de servidor personalizadas por dispositivo.

Para conocer más sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones vigentes en el sitio oficial de Navtelekom https://www.navtelecom.ru/ antes de realizar despliegues en producción.
