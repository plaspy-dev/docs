---
slug: /ev/ev_603/configuration
id: ev_603-configuration
sidebar_label: Configuration
title: EV - EV-603 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS EV EV-603 y cómo configurarlo para funcionar con los servidores de Plaspy
keywords:
  - Configuración EV EV-603
  - Configuración inicial EV EV-603
  - Configuración rastreador GPS EV-603
  - Configuración EV-603 para Plaspy
  - Configuración servidor rastreador EV
  - Configuración SMS EV-603
  - Rastreo vehicular EV-603
  - Guía de instalación rastreador EV
  - Configuración rastreador Plaspy
  - Manual EV EV-603
---

# EV - EV-603 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador vehicular y para motocicleta EV EV-603 con Plaspy. Resume los pasos prácticos y los comandos públicos que suelen utilizarse para apuntar el EV-603 a los servidores de Plaspy, y explica qué verificar antes de intentar la integración. El EV-603 incluye conectividad GPS y GSM, batería de respaldo y admite comandos de configuración por SMS que los fabricantes suelen publicar para uso del instalador.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que se usa un único conjunto de valores de servidor para registrar el equipo en la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; para el EV-603 el flujo público de configuración incluye comandos SMS y un paso de cambio de servidor controlado por el fabricante que puede requerir contactar al proveedor.

## Resumen de la configuración

Esta configuración prepara el EV-603 para comunicarse confiablemente con los servidores de Plaspy, de modo que el dispositivo aparezca y reporte en la plataforma. El objetivo es ajustar la zona horaria y el APN del equipo, asegurar que tenga acceso a la red y configurar el rastreador para que envíe datos al endpoint y puerto compartidos de Plaspy.

- Prepare el rastreador con una SIM válida y el APN correcto para que tenga conectividad GPRS/SMS para reportes y comandos remotos.
- Ajuste la zona horaria y cualquier configuración regional para que las marcas de tiempo coincidan con los reportes de su cuenta en Plaspy.
- Configure los parámetros de servidor para apuntar a Plaspy usando d.plaspy.com o la IP pública para que el dispositivo entregue posiciones y eventos.
- Asegúrese de que el puerto del rastreador esté configurado en el puerto compartido de Plaspy y seleccione UDP o TCP según lo soporte el equipo.
- Valide la conectividad para que el rastreador sea visible y reporte en Plaspy después de aplicar los ajustes.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: device may be configured to use UDP or TCP on port 8888
- Protocol handling: Plaspy automatically detects the tracker protocol for supported devices

## Requisitos típicos antes de configurar

- Un EV-603 con alimentación y una tarjeta SIM activa con plan de datos móviles o capacidad de SMS.
- Acceso al método de configuración que el fabricante soporte (comandos SMS o software del proveedor).
- Conocimiento de la contraseña predeterminada del equipo si los comandos SMS requieren autenticación (la contraseña pública usada en los ejemplos abajo es 123456).
- Confirmación de los ajustes APN del operador de la SIM para permitir datos GPRS.
- Batería de respaldo cargada o fuente de alimentación estable mientras se configura y prueba el equipo.
- Información de contacto del fabricante o vendedor si la opción de cambiar el servidor debe ser activada por ellos.

## Cómo se conecta este rastreador a Plaspy

El EV-603 se configura para reportar ubicación y eventos del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma muestre posiciones en tiempo real y alertas. El reporte ocurre sobre el transporte seleccionado al mismo puerto de Plaspy usado por todos los dispositivos compatibles, y Plaspy detecta el protocolo automáticamente.

- El rastreador envía actualizaciones de posición y notificaciones de eventos a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador y las capacidades del equipo.
- Plaspy recibe y parsea el protocolo del rastreador automáticamente una vez que la conectividad de red y los ajustes de servidor son correctos.
- Eventos generados por el dispositivo, como movimiento, alarma o cambios de estado, se reenvían a las cuentas de usuario en Plaspy para su monitoreo.
- Una configuración exitosa hace que el dispositivo sea visible en Plaspy y habilita el historial de ubicaciones y el reporte de alertas.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración del fabricante para el EV-603 (interfaz de comandos SMS o utilidad del proveedor).
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como objetivo del servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el protocolo de transporte.
5. Aplique o guarde la configuración en el equipo usando el método del fabricante (para SMS, envíe los comandos correspondientes).
6. Reinicie o corte y restaure la alimentación del dispositivo si las instrucciones del fabricante requieren un reinicio para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con datos de posición recientes.

## Ejemplos de comandos de configuración

El flujo público de configuración del EV-603 admite comandos SMS. Los ejemplos públicos a continuación usan la contraseña predeterminada del dispositivo 123456. Estos comandos se envían como mensajes SMS al número del dispositivo. Conserve y reemplace los marcadores de posición según sea necesario.

- Contraseña predeterminada usada en los ejemplos: 123456

1) Ajustar la zona horaria a UTC+0
```text
123456L+00
```
- Envía un comando para establecer la zona horaria del dispositivo a UTC 0.

2) Configurar el APN del operador
```text
123456S1,[apn]
```
- Comando básico de APN. Si su operador requiere usuario y contraseña para el APN, amplíe el comando con los marcadores opcionales:
```text
123456S1,[apn],[apnu],[apnp]
```
- [apn] es la cadena APN del operador. [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Mantenga estos marcadores y reemplácelos por los valores reales del operador.

3) Establecer el servidor a la IP pública de Plaspy y el puerto
```text
123456I1,54.85.159.138,8888
```
- NOTA: La documentación del fabricante indica que puede ser necesario contactar al vendedor para habilitar la opción de cambiar el servidor en algunas revisiones de firmware. Si el dispositivo soporta establecer el servidor por dominio, puede alternativamente apuntar a d.plaspy.com si el rastreador acepta nombres de dominio en el mismo formato de comando.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar el formato exacto de los comandos SMS o si se permiten cambios de servidor; siempre verifique los comandos contra la documentación del dispositivo.
- El paso de cambio de servidor para el EV-603 puede requerir activación por parte del fabricante en algunas unidades; contacte al proveedor si el comando I1 es ignorado.
- Elija TCP o UDP según su política de red y la preferencia del instalador; Plaspy acepta ambos en el puerto 8888 y detecta automáticamente las especificidades del protocolo.
- Si utiliza SMS para configurar, asegúrese de que la SIM tenga crédito de SMS suficiente y que los mensajes se envíen al número del dispositivo.
- Después de aplicar los comandos, espere unos minutos para que el equipo se registre en la red y comience a reportar a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el EV-603 con Plaspy centraliza la visibilidad de la ubicación de vehículos y motocicletas, alertas y eventos operativos en una sola plataforma. Configurar el dispositivo para que reporte a Plaspy con los ajustes de servidor compartidos facilita el despliegue en múltiples unidades porque se usa el mismo servidor y puerto para todos los rastreadores compatibles, y Plaspy se encarga de la detección automática del protocolo.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones y capacidades más recientes del EV-603 en el sitio del fabricante http://www.eviewltd.com/ antes de realizar despliegues a gran escala.
