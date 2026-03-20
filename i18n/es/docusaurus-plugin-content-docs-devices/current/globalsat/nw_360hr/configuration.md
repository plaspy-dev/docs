---
slug: /globalsat/nw_360hr/configuration
id: nw_360hr-configuration
sidebar_label: Configuration
title: GlobalSat - NW-360HR Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GlobalSat NW-360HR con ajustes de servidor y comandos SMS para integrarlo con Plaspy
keywords:
  - GlobalSat NW-360HR configuración
  - GlobalSat NW-360HR instalación
  - GlobalSat NW-360HR Plaspy
  - Configuración rastreador GPS NW-360HR
  - Configuración del servidor NW-360HR
  - Configuración SMS NW-360HR
  - Configuración de rastreador GPS wearable
  - Configuración de rastreador Plaspy
  - Configuración de dispositivo Plaspy
  - Integración de rastreador wearable con Plaspy
---

# GlobalSat - NW-360HR Configuration

Esta página describe el contexto público de configuración para usar el rastreador wearable GlobalSat NW-360HR con Plaspy. Presenta los ajustes de servidor compartidos que Plaspy requiere, explica los comandos SMS comunes disponibles públicamente para este modelo y detalla los pasos prácticos para preparar el dispositivo para que envíe ubicación y telemetría a Plaspy para monitoreo y alertas.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NW-360HR admite configuración vía SMS según la documentación pública y transmite ubicación, BLE y telemetría de sensores a través de redes celulares IoT; combine esa guía del fabricante con los valores del servidor de Plaspy que se muestran más abajo para completar la configuración.

## Resumen de configuración

El objetivo de la configuración es preparar el NW-360HR para que se comunique con el backend de Plaspy y así aparezcan en su cuenta la ubicación, SOS, reportes de caídas y telemetría fisiológica. Configurar normalmente implica apuntar el dispositivo al endpoint del servidor de Plaspy con el transporte y puerto correctos, confirmar acceso a la red y validar el envío de datos una vez aplicados los parámetros.

- Configure el endpoint de reporte del dispositivo con el servidor y puerto de Plaspy para que el rastreador pueda subir datos.
- Proporcione o confirme el APN y parámetros de red si la operadora los requiere.
- Use SMS o la herramienta del fabricante para enviar los comandos de configuración disponibles para este modelo.
- Reinicie el dispositivo si es necesario para que los ajustes entren en vigor y comience a reportar.
- Valide que el dispositivo aparezca en Plaspy y que se reciban los reportes periódicos y por eventos.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automáticamente detecta el protocolo del rastreador para que la plataforma acepte datos de modelos compatibles sin necesidad de seleccionar el protocolo por separado

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detectará automáticamente el protocolo correcto una vez que el rastreador apunte al endpoint de Plaspy.

## Requisitos típicos antes de la configuración

- Un NW-360HR cargado y funcionando con el número IMEI conocido.
- Conexión celular activa para el dispositivo mediante una operadora que soporte LTE-M o NB-IoT y los valores APN requeridos.
- Acceso a un teléfono con capacidad SMS o a la herramienta de configuración del fabricante, ya que este modelo admite comandos por SMS.
- Los parámetros APN correctos del proveedor celular; modelConfiguration usa los marcadores {{apn}}, {{apnu}} y {{apnp}} para ese propósito.
- Una cuenta en Plaspy y acceso a la plataforma para validar que el dispositivo está reportando después de la configuración.
- Documentación del fabricante o acceso a la herramienta del vendedor para confirmar el cálculo de la suma de verificación o generar los checksums si fueran necesarios.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para reportar al endpoint de Plaspy, el NW-360HR envía ubicación, telemetría de sensores y notificaciones de eventos al backend compartido de Plaspy para que los dispositivos sean visibles y manejables en la plataforma. El dispositivo puede usar UDP o TCP para llegar a Plaspy en el mismo puerto utilizado por todos los equipos.

- El rastreador se configura para reportar a d.plaspy.com (54.85.159.138) y al puerto 8888.
- Los datos fluyen desde el dispositivo hacia Plaspy por UDP o TCP según el transporte seleccionado.
- Reportes periódicos, mensajes activados por movimiento, eventos SOS y avisos de caídas se reenvían a Plaspy para visualización y alertas.
- Los datos de balizas BLE y la telemetría fisiológica incluidos en los informes son ingeridos por Plaspy junto con las posiciones GPS para un monitoreo contextual.
- Plaspy detecta automáticamente el protocolo correcto del rastreador una vez que los mensajes llegan al endpoint compartido del servidor.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de GlobalSat o al software para el NW-360HR; consulte el manual del dispositivo para los formatos SMS y las reglas del checksum.
2. Prepare el IMEI del dispositivo y los valores APN de la red; tenga a mano los marcadores {{apn}}, {{apnu}} y {{apnp}} para el comando SMS si se requieren.
3. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración enviando el comando por SMS o utilizando la herramienta del fabricante para cargar el ajuste.
6. Reinicie el dispositivo si fuera necesario para activar los nuevos parámetros.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en su cuenta, confirmando que se reciben mensajes periódicos y por eventos.

## Ejemplos de comandos de configuración

La documentación del modelo GlobalSat incluye plantillas públicas de comandos SMS para configuración y reinicio. Estos comandos contienen marcadores que deben reemplazarse por el IMEI del dispositivo y los valores APN de la red. A cada comando se le añade un valor de checksum; el fabricante muestra un ejemplo público basado en XOR de los bytes del texto.

Format example used in manufacturer UI or batch tools
TSPRXAB27GHKLMnaicz*U!

Setup command example
Reemplace {{imei}}, {{apn}}, {{apnu}}, {{apnp}} y calcule el valor de checksum para sustituir {{checksum}} antes de enviar. E0 está definido con la IP del servidor de Plaspy y E1 es el puerto de Plaspy.

Plantilla de comando GSS
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command example
Indique este comando de reinicio como opcional según sea necesario para aplicar ajustes o como parte de la configuración inicial. Reemplace {{imei}} y calcule {{checksumreeboot}}.

Plantilla de comando GSC de reinicio
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Nota sobre la suma de verificación
- El ejemplo público calcula la suma de verificación como un XOR de todos los bytes del texto del comando antes del asterisco, y luego convierte el resultado a una cadena hexadecimal de dos dígitos en mayúsculas. Las herramientas del fabricante o el manual del dispositivo pueden proporcionar un generador de checksum; si no, use el método XOR documentado para obtener {{checksum}} y {{checksumreeboot}}.

Explicación de los marcadores
- {{imei}} — el número IMEI de su dispositivo.
- {{apn}} — nombre del APN requerido por la operadora celular.
- {{apnu}} — nombre de usuario del APN si la red lo exige.
- {{apnp}} — contraseña del APN si la red lo exige.
- {{checksum}} y {{checksumreeboot}} — valores de checksum calculados según el formato del comando del dispositivo.

## Notas de configuración

- El NW-360HR admite configuración vía SMS tal como se muestra en las plantillas públicas; asegúrese de enviar los comandos SMS desde un número autorizado si el dispositivo restringe las fuentes.
- Diferentes versiones de firmware o revisiones de hardware pueden requerir parámetros de comando o comportamiento de checksum ligeramente distintos; confirme siempre con el manual del dispositivo o la herramienta del proveedor.
- Elija UDP o TCP según la confiabilidad de la red y las recomendaciones de la operadora; Plaspy acepta ambos transportes en el puerto 8888.
- Use exactamente los ajustes del servidor de Plaspy indicados arriba al configurar el dispositivo: d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Mantenga los marcadores de APN y reemplácelos por los valores de su operadora antes de enviar cualquier comando de configuración por SMS.

## Por qué usar Plaspy con esta configuración

Integrar el NW-360HR con Plaspy convierte la ubicación wearable, eventos SOS, avisos de caída y telemetría fisiológica en una plataforma unificada para monitoreo y respuesta. Para proveedores de cuidado, equipos de seguridad y gestores operativos, esta integración simplifica la visibilidad tanto de la posición como del contexto de salud, permitiendo actuar sobre alertas y revisar datos históricos desde un único backend.

Para obtener más información sobre Plaspy y cómo la plataforma puede ingerir reportes de dispositivos para seguimiento y alertas en tiempo real visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique las instrucciones más recientes con GlobalSat en https://www.globalsat.com.tw/ antes del despliegue.
