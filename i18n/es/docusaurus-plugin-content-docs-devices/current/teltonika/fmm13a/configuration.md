---
slug: /teltonika/fmm13a/configuration
id: fmm13a-configuration
sidebar_label: Configuration
title: Teltonika - FMM13A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Teltonika FMM13A para Plaspy con ajustes de servidor y comandos de ejemplo
keywords:
  - Teltonika FMM13A
  - configuración FMM13A
  - configuración Teltonika
  - rastreador compatible con Plaspy
  - configuración rastreador GPS
  - rastreador para gestión de flotas
  - configuración servidor FMM13A
  - configuración seguimiento vehicular
  - integración plataforma GPS
  - configuración Teltonika Plaspy
---

# Teltonika - Configuración del FMM13A

Esta página describe el contexto público de configuración para usar el Teltonika FMM13A con Plaspy. Se enfoca en los ajustes de servidor compartidos por Plaspy, recomendaciones prácticas de instalación y un ejemplo de comando presente en flujos públicos de configuración de Teltonika para que prepare el equipo y envíe telemetría y ubicación a Plaspy.

Plaspy utiliza un único endpoint y puerto compartido para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo en la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; use la información aquí como guía práctica y confirme los pasos específicos del equipo con la documentación de Teltonika cuando sea necesario.

## Visión general de la configuración

El objetivo de este proceso es preparar el FMM13A para que envíe telemetría y ubicación GNSS a Plaspy de forma fiable a través de la red celular, validar la conectividad y permitir la visibilidad del dispositivo dentro de la plataforma Plaspy. El comando público de ejemplo incluido aquí muestra cómo se aplican comúnmente los parámetros básicos de red y servidor en dispositivos Teltonika.

- Configure el APN del equipo y las credenciales necesarias para que la unidad acceda a la red de datos móviles.  
- Apunte el rastreador al servidor de Plaspy usando el dominio o la IP para que los reportes lleguen a la plataforma.  
- Ajuste el puerto y la selección de transporte según lo requiera el firmware del dispositivo.  
- Guarde y aplique la configuración; reinicie el dispositivo si es necesario para que comience a reportar.  
- Verifique que el dispositivo aparezca en Plaspy y que esté enviando ubicación y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (todos los dispositivos en Plaspy usan el mismo puerto)  
- Transporte: soporte para UDP o TCP según el requisito del dispositivo y el firmware  
- Plaspy detecta automáticamente el protocolo del rastreador en el lado de la plataforma

## Requisitos típicos antes de la instalación

- Asegúrese de que el equipo tenga alimentación del vehículo y que la batería interna de respaldo esté cargada para realizar una configuración y pruebas seguras.  
- Disponga de una tarjeta SIM válida con un plan de datos y la información APN correcta. Reemplace el marcador [apn] por el APN de su operador.  
- Acceso al método de configuración del fabricante que prefiera, como comandos SMS, herramientas de Teltonika o gestión remota como FOTA WEB. El ejemplo más abajo usa un comando en estilo SMS.  
- Conozca el número de administrador del dispositivo o tenga la unidad conectada a un cable de configuración o sistema de gestión cuando sea requerido.  
- Verifique la versión de firmware del equipo y las notas de la versión que puedan afectar los IDs de parámetros o los formatos de comando.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura, el FMM13A envía sus reportes de telemetría y ubicación a través de la red de datos celulares al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los datos entrantes, identifica el protocolo de forma automática y presenta la telemetría y ubicación normalizadas en paneles y APIs.

- El dispositivo usa el APN configurado para establecer la sesión de datos y alcanzar d.plaspy.com o 54.85.159.138.  
- Ubicación, eventos de entrada/salida y telemetría de sensores se transmiten a Plaspy en el puerto 8888.  
- El transporte puede seleccionarse como UDP o TCP en el equipo; Plaspy acepta ambos y detecta automáticamente el protocolo usado.  
- Plaspy normaliza los mensajes entrantes para que los dispositivos aparezcan de forma consistente en la plataforma sin importar la variante de protocolo.  
- Tras la configuración, confirme que las actualizaciones de posición y los reportes de eventos sean visibles en Plaspy.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Teltonika apropiado para el equipo, por ejemplo comandos SMS, Teltonika Configurator o gestión remota FOTA WEB.  
2. Introduzca el endpoint de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el parámetro de servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888, que es el usado por Plaspy para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP en el equipo si requiere elección de transporte; use el valor requerido por su firmware.  
5. Configure el APN y las credenciales del APN usando los valores de su operador y los comandos de ejemplo abajo.  
6. Aplique o guarde la configuración y reinicie el equipo si lo requiere la unidad o el firmware.  
7. Valide que el dispositivo reporte a Plaspy revisando la llegada de datos, las actualizaciones de ubicación y el estado en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El siguiente comando de ejemplo público es un estilo común de Teltonika para establecer parámetros que configuran APN, credenciales de APN, dominio del servidor, puerto y una bandera de transporte. Reemplace los marcadores por los valores de su operador antes de enviar. Este comando puede usarse vía SMS al número administrador del equipo o mediante una herramienta de Teltonika que acepte el mismo formato de parámetros.

- Comando de parámetros de ejemplo:

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores y campos:
  - [apn] = cadena APN de su operador móvil. Reemplace con el APN de su proveedor.  
  - [apnu] = nombre de usuario del APN si su operador lo requiere; de lo contrario déjelo vacío o use el método del dispositivo para limpiar.  
  - [apnp] = contraseña del APN si su operador lo requiere; de lo contrario déjelo vacío o use el método del dispositivo para limpiar.  
  - 2004 configura el dominio del servidor a d.plaspy.com para que el equipo reporte a Plaspy.  
  - 2005 establece el puerto en 8888 que Plaspy usa para todos los dispositivos.  
  - 2006 establece una bandera de transporte o relacionada en el dispositivo; el significado exacto puede variar según el firmware, así que use el valor requerido por su equipo o consulte la documentación de Teltonika.

Si su despliegue utiliza la dirección IP del servidor en lugar del nombre de dominio, sustituya 54.85.159.138 por d.plaspy.com en el comando según corresponda para su método de configuración.

## Notas de configuración

- Los IDs de parámetros y los formatos de comando pueden variar según la revisión del firmware de Teltonika; confirme siempre los IDs correctos para su versión de firmware.  
- Elija UDP o TCP según la preferencia del instalador y las capacidades del firmware del dispositivo; Plaspy acepta ambos y detecta automáticamente el protocolo.  
- La configuración por SMS es común para ajustes rápidos, pero usar las herramientas remotas de Teltonika o un configurador por cable puede ser preferible para despliegues por lotes.  
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración de flotas con múltiples modelos.  
- Verifique la documentación del fabricante y las notas de firmware para cualquier comportamiento específico del dispositivo que afecte la conectividad o los comandos remotos.

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM13A con Plaspy ofrece a las flotas visibilidad consistente y en tiempo real de la ubicación y telemetría, aprovechando un endpoint y puerto comunes. El diseño compacto del FMM13A, su batería de respaldo y la flexibilidad de I/O lo hacen una opción práctica para el rastreo de vehículos y activos; configurarlo para que reporte a Plaspy integra esos datos en paneles y herramientas de informes centralizadas para supervisión operativa.

Para saber más sobre Plaspy y cómo esta configuración apoya el monitoreo de flotas visite https://www.plaspy.com. Para los comandos específicos más recientes, detalles de firmware y definiciones de parámetros, siempre verifique la información actual en el sitio del fabricante https://www.teltonika-gps.com/
