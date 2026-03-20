---
slug: /globalsat/gdo_10/configuration
id: gdo_10-configuration
sidebar_label: Configuration
title: GlobalSat - GDO-10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el oscilador GNSS GlobalSat GDO-10 con Plaspy usando ajustes de servidor compartidos
keywords:
  - Configuración GlobalSat GDO-10
  - Instalación GlobalSat GDO-10
  - Configuración GDO-10 Plaspy
  - Configuración de servidor GDO-10
  - Configuración de telemetría GDO-10
  - Configuración de dispositivo Plaspy
  - Integración de temporización GNSS OCXO
  - Monitoreo 1PPS con Plaspy
  - Configuración de plataforma para dispositivos de temporización
  - Configuración de gateway de telemetría
---

# GlobalSat - Configuración del GDO-10

Esta página documenta el contexto público de configuración para usar el GlobalSat GDO-10 con Plaspy. Resume los pasos prácticos y los comandos públicos disponibles que preparan una instalación del GDO-10 o un gateway de telemetría conectado para reportar datos de temporización y estado al servicio Plaspy. Las indicaciones que siguen se basan en la descripción del GDO-10 y en los comandos públicos conocidos; están pensadas para ayudar a ingenieros e instaladores a integrar el equipo o su gateway de monitoreo con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que emplee. El GDO-10 es un oscilador disciplinado por GNSS con OCXO que ofrece salidas 1PPS y 10 MHz y normalmente se integra en Plaspy a través de un gateway de telemetría o directamente si el dispositivo o un adaptador pueden reportar por SMS celular o IP.

## Resumen de la configuración

El objetivo de la configuración es dirigir al GDO-10 o a su adaptador de telemetría a que envíe información sobre la salud de temporización y el estado de bloqueo GNSS al endpoint de Plaspy, validar la conectividad y habilitar la visibilidad del estado en el panel de Plaspy. Cuando hay comandos públicos disponibles, suelen utilizarse para establecer dirección del servidor, puerto, transporte y las credenciales APN necesarias para la conectividad celular.

- Prepare el dispositivo o el gateway de telemetría para que pueda alcanzar el endpoint del servidor Plaspy para reporte de telemetría y estado.
- Configure la dirección y el puerto del servidor para que el dispositivo o gateway envíe datos a Plaspy y se realice la detección automática del protocolo.
- Proporcione la SIM, APN o acceso SMS requerido si utiliza configuración o reporte vía celular.
- Valide la conectividad y confirme que el dispositivo o gateway reporta estado a Plaspy y que la telemetría aparece en la plataforma.
- Opcionalmente reinicie el equipo tras aplicar los ajustes para asegurar que la nueva configuración tenga efecto.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible: UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Acceso al IMEI del equipo para poder referenciar la unidad correcta en los comandos de configuración.
- Una SIM con capacidad SMS o datos celulares cuando utilice comandos por SMS o reporte IP directo, y las credenciales APN requeridas por su operador.
- Alimentación y acceso físico al GDO-10 o al gateway de monitoreo que lee sus salidas 1PPS y 10 MHz.
- Acceso al método de configuración del fabricante o a la herramienta aprobada del proveedor para enviar comandos SMS o aplicar ajustes.
- Un método para calcular e insertar la suma de verificación (checksum) requerida si el formato de comandos del dispositivo la exige.
- Un plan para validar que la telemetría del dispositivo o gateway llega a Plaspy después de la configuración.

## Cómo se conecta este equipo a Plaspy

El GDO-10 generalmente se integra en un flujo de monitoreo o telemetría donde un gateway o adaptador lee métricas de temporización y salud, y esas métricas se reenvían a Plaspy. En muchas implementaciones, el gateway de telemetría o el dispositivo mismo se configura para enviar sus datos al endpoint compartido de Plaspy en el puerto 8888 usando UDP o TCP. Plaspy detectará automáticamente el protocolo y procesará los datos entrantes del dispositivo.

- Configure el dispositivo o gateway para que reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Elija UDP o TCP como transporte cuando el equipo requiera una selección explícita.
- El dispositivo o gateway envía paquetes de estado y telemetría al endpoint de Plaspy para la detección automática del protocolo.
- Plaspy ingiere salud de temporización, estado de bloqueo GNSS y reportes de alarmas para monitorización operativa.
- Confirme la visibilidad en Plaspy para validar el reporte y el monitoreo exitosos.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial de GlobalSat o a la herramienta del proveedor para introducir comandos o aplicar ajustes del equipo.
2. Inserte el IMEI del dispositivo en la configuración donde sea requerido para que los comandos apunten a la unidad correcta.
3. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
4. Establezca el puerto de destino a 8888, usado por Plaspy para todos los dispositivos.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir uno.
6. Aplique o guarde la configuración en el dispositivo o gateway y, si el proceso lo exige, reinicie el equipo.
7. Valide que el dispositivo reporta a Plaspy y que aparece en la plataforma con los indicadores de temporización y salud esperados.

## Comandos de configuración de ejemplo

La configuración pública del GDO-10 incluye comandos formateados para SMS. El ejemplo que sigue muestra la estructura de los SMS utilizada para fijar servidor y detalles APN, y un comando opcional de reinicio. Los marcadores deben reemplazarse por los valores reales de su instalación.

Notas sobre los marcadores
- [imei] Reemplace por el número IMEI del dispositivo.
- [apn] Reemplace por el nombre APN de su operador móvil.
- [apnu] Reemplace por el nombre de usuario del APN si su operador lo requiere. Deje vacío si no es necesario.
- [apnp] Reemplace por la contraseña del APN si su operador lo requiere. Deje vacío si no es necesario.
- [checksum] y [checksumreeboot] son sumas de comprobación hexadecimales de dos caracteres en mayúsculas calculadas como el XOR de todos los caracteres antes del asterisco en la cadena del comando.

Nota sobre el formato
- El ejemplo de envoltura usado por Plaspy para paquetes de comandos SMS TSPRXAB27GHKLMnaicz*U! indica el formato de protocolo SMS esperado por la familia de dispositivos. Su herramienta de envío de SMS debe construir el mensaje exactamente como lo exige el proveedor del dispositivo.

1) Comando para configurar servidor y APN
Envíe este SMS al número del dispositivo tras reemplazar los marcadores y calcular la suma de verificación:

```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

2) Comando opcional de reinicio
Si es necesario reiniciar para aplicar los ajustes, envíe este SMS (opcional):

```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Cálculo de checksum
- El ejemplo público en JavaScript proporcionado por el fabricante calcula la suma de verificación XOReando los códigos de carácter de la subcadena del comando antes del asterisco y convirtiendo el resultado a una cadena hexadecimal de dos caracteres en mayúsculas. Asegúrese de insertar la suma calculada en el comando donde aparecen [checksum] o [checksumreeboot].

## Notas de configuración

- El GDO-10 se integra frecuentemente a través de un gateway de telemetría; sin embargo, existen materiales públicos con comandos por SMS o reporte IP directo que pueden utilizarse cuando el firmware del dispositivo los soporta.
- Las revisiones de firmware y hardware pueden cambiar el formato de comandos, los campos o el comportamiento del checksum. Verifique la sintaxis de los comandos con la documentación de firmware que tenga disponible.
- Elija TCP o UDP según los requisitos de su red y gateway; Plaspy soporta ambos y detectará automáticamente el protocolo cuando lleguen paquetes al puerto 8888.
- Si usa comandos por SMS, mantenga un dispositivo de prueba y confirme que los comandos se aplicaron observando reportes a d.plaspy.com o 54.85.159.138 en el puerto 8888 dentro de su flujo de monitoreo.
- Preserve la exactitud del IMEI y la corrección del checksum al componer los SMS; un IMEI o checksum incorrecto impedirá que el dispositivo acepte la configuración.

## Por qué usar Plaspy con esta configuración

Integrar el GlobalSat GDO-10 en Plaspy proporciona a los equipos de operaciones visibilidad centralizada de la salud de temporización, el estado de bloqueo GNSS y las alarmas junto con otra telemetría. En instalaciones que requieren temporización disciplinada —como estaciones base de telecomunicaciones, bancos de prueba o segmentos terrestres de satélite— reenviar el estado del GDO-10 a Plaspy ayuda a correlacionar métricas de sincronización con la salud del sistema y eventos operativos.

Para saber más sobre Plaspy y cómo puede gestionar puntos finales de temporización y telemetría visite https://www.plaspy.com. Para los detalles más recientes sobre configuración específica del dispositivo, notas de firmware y referencias oficiales de comandos verifique la documentación actual en el sitio de GlobalSat https://www.globalsat.com.tw/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
