---
slug: /sinotrack/al_900g/configuration
id: al_900g-configuration
sidebar_label: Configuration
title: SinoTrack - AL-900G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SinoTrack AL-900G para Plaspy con ajustes de servidor, comandos SMS y flujo de trabajo práctico
keywords:
  - Configuración SinoTrack AL-900G
  - Configuración AL-900G
  - SinoTrack AL-900G Plaspy
  - Configuración de rastreador GPS SinoTrack
  - Configuración de servidor AL-900G
  - Comandos SMS AL-900G
  - Configuración de dispositivo Plaspy
  - Guía de configuración rastreador GPS
  - Rastreo de vehículos AL-900G
  - Configuración GPRS AL-900G
---

# SinoTrack - Configuración del AL-900G

Esta página documenta el contexto público de configuración para usar el rastreador SinoTrack AL-900G con Plaspy. Reúne los ajustes de servidor prácticos, los pasos habituales de trabajo y los comandos SMS publicados que se usan para apuntar dispositivos AL-900G a la plataforma Plaspy y validar la conectividad. Use esta guía como referencia técnica para preparar un dispositivo antes de integrarlo con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos y valores mostrados aquí son los elementos de configuración públicos proporcionados para el AL-900G y deben verificarse con la documentación del firmware del dispositivo cuando sea necesario.

## Resumen de la configuración

El proceso prepara un rastreador AL-900G para enviar reportes de posición y estado al servidor de Plaspy, de modo que el dispositivo quede visible y gestionable en la plataforma. En muchas instalaciones esto se realiza mediante el conjunto de comandos SMS del fabricante o una herramienta de configuración, seguido de la validación de que los reportes llegan a Plaspy.

- Apuntar el dispositivo al endpoint del servidor de Plaspy para que la telemetría se enrute a la plataforma.
- Configurar GPRS y el APN del dispositivo para que establezca la conexión de datos.
- Ajustar los intervalos de reporte para que el dispositivo envíe actualizaciones con la cadencia deseada.
- Validar la configuración mediante el comando de verificación del dispositivo y comprobando los datos entrantes en Plaspy.
- Opcionalmente restaurar o reiniciar los ajustes de fábrica antes de aplicar las políticas estándar de la organización.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse para UDP o TCP en el puerto 8888)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Asegúrese de que el rastreador tenga alimentación y, de estar instalado, una batería de respaldo cargada.  
- Disponga del método de configuración recomendado por el fabricante, como comandos SMS o una herramienta del proveedor.  
- Una tarjeta SIM válida y servicio de datos móviles con el APN correcto para su operador (se requieren credenciales APN para GPRS).  
- Acceso básico del instalador al vehículo o activo para enviar comandos SMS o conectar equipos de configuración.  
- Confirme la versión del firmware y cualquier nota del proveedor que afecte la sintaxis de los comandos o las funciones disponibles.

## Cómo se conecta este rastreador a Plaspy

El AL-900G se configura para reportar ubicación y telemetría al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda procesar y mostrar el dispositivo en la plataforma. Plaspy escucha en un único puerto para todos los dispositivos e infiere automáticamente el protocolo correcto.

- El dispositivo se conecta por GPRS al dominio o IP del servidor Plaspy y al puerto 8888.  
- El rastreador usa el APN y las credenciales GPRS configuradas para establecer la sesión de datos.  
- Los intervalos de reporte determinan con qué frecuencia el AL-900G envía actualizaciones de posición a Plaspy.  
- Plaspy recibe los datos y detecta automáticamente el protocolo para parsear los mensajes.  
- Una vez parseada la información, la ubicación y los eventos quedan visibles en la interfaz de Plaspy para monitoreo e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software (para AL-900G, los comandos SMS son de uso común).  
2. Ingrese el objetivo del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo permita la opción de configuración del dispositivo.  
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Seleccione el protocolo de transporte (UDP o TCP) si el equipo solicita elección de transporte.  
5. Configure el APN y las credenciales GPRS requeridas por su operador de SIM.  
6. Aplique o guarde la configuración y cambie el dispositivo a modo GPRS/datos si es necesario.  
7. Reinicie el dispositivo si el fabricante lo recomienda.  
8. Valide que el dispositivo reporta a Plaspy y verifique que la plataforma reciba mensajes y muestre la ubicación del dispositivo.

## Comandos de configuración de ejemplo

El AL-900G puede configurarse vía SMS usando los comandos públicos que se muestran a continuación. Estos comandos se presentan en el orden provisto por la información del fabricante. Dependiendo del firmware, algunos comandos pueden requerir contraseña de administrador; confirme con la documentación de su proveedor.

1. Reinicio opcional a configuración de fábrica (use solo si necesita restaurar valores por defecto):
```
RESET
```

2. Ajustar la zona horaria a UTC+0:
```
8960000E00
```

3. Configurar el APN del operador y credenciales (reemplazar los marcadores con los valores de su operador):
```
8030000 [apn] [apnu] [apnp]
```
- [apn] es el nombre APN proporcionado por el operador móvil.  
- [apnu] es el usuario del APN si se requiere (dejar en blanco si no aplica).  
- [apnp] es la contraseña del APN si se requiere (dejar en blanco si no aplica).

4. Establecer el endpoint y puerto GPRS para Plaspy (este ejemplo usa la IP y puerto del servidor Plaspy):
```
8040000 54.85.159.138 8888
```
Puede usar d.plaspy.com cuando el dispositivo acepta un dominio en lugar de una IP, pero el ejemplo público usa la IP.

5. Definir intervalo de reporte cuando está encendido (el ejemplo fija 60 segundos):
```
8050000 60
```

6. Definir intervalo de reporte en estado apagado (el ejemplo fija 60 segundos):
```
8090000 60
```

7. Cambiar el dispositivo a modo GPRS (activar reporte por datos):
```
7100000
```

8. Verificar la configuración actual del dispositivo:
```
RCONF
```
- El comando RCONF devuelve detalles de configuración del dispositivo, incluido el ID que usa Plaspy.

## Notas de configuración

- Las revisiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis o el comportamiento de los comandos; confirme siempre la sintaxis con el firmware instalado en su equipo.  
- La configuración por SMS es un método común para los AL-900G; si usa una herramienta de configuración o interfaz USB, consulte la guía del fabricante para pasos equivalentes.  
- Elija UDP o TCP según su red y las preferencias del instalador; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Tenga listos los marcadores [apn], [apnu] y [apnp] con los valores del operador para evitar fallos de conexión.  
- Use el comando RCONF para confirmar que el dispositivo usa el servidor GPRS y los ajustes esperados antes de validar en el lado de Plaspy.

## Por qué usar Plaspy con esta configuración

Utilizar Plaspy con el AL-900G ofrece una vía sencilla para centralizar la ubicación, el estado y los reportes de eventos de flotas y activos. Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y habilitar el reporte por GPRS permite que Plaspy reciba los mensajes del dispositivo y detecte automáticamente el protocolo correcto para que los dispositivos aparezcan en la plataforma sin cambios de puerto por unidad.

Conozca más sobre Plaspy y cómo gestiona las integraciones de dispositivos en https://www.plaspy.com. Para detalles específicos más actuales, notas de firmware y referencia oficial de comandos del AL-900G, verifique la información en el sitio del fabricante https://www.sinotrackgps.com/.
