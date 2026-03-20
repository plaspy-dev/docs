---
slug: /atrack/as500/configuration
id: as500-configuration
sidebar_label: Configuration
title: ATrack - AS500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for ATrack AS500 to connect with Plaspy using shared server settings and practical setup commands
keywords:
  - ATrack AS500 configuration
  - AS500 setup Plaspy
  - ATrack tracker configuration
  - AS500 server configuration
  - AS500 GPS platform setup
  - Plaspy device configuration
  - AS500 GPRS setup
  - asset tracker configuration
  - AS500 UDP TCP configuration
  - AS500 AT commands
---

# ATrack - AS500 Configuration

This page covers the public configuration context for using the ATrack AS500 tracker with Plaspy. It collects the practical, public setup information you need to point the device at Plaspy, explains what the server settings are, and shows example AT commands that are commonly used to prepare the device for operation with Plaspy. Use this guide alongside the official ATrack product documentation for device specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the platform expects a consistent server endpoint and port for ingestion while determining the device protocol at runtime. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so validate any device-specific steps against ATrack documentation or installer guidance.

## Configuration Overview

The goal of configuring an AS500 for Plaspy is to prepare the tracker to reliably connect, report telemetry, and be visible in the Plaspy platform. This includes configuring network parameters, selecting transport, enabling event reporting, and verifying that the device can reach the Plaspy server.

- Point the AS500 to the Plaspy server endpoint and port so telemetry is delivered to Plaspy.
- Configure APN and GPRS parameters as required for the installed SIM or eSIM profile.
- Enable reporting intervals and event rules so motion and sensor events are transmitted.
- Verify transport selection (UDP or TCP) and confirm the device can establish a session to Plaspy.
- Validate successful delivery and queued data ingestion so Plaspy receives both live and buffered events.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; select the transport supported by your firmware or provisioning tool
- Plaspy automatically detects the tracker protocol so the platform accepts data from supported devices without per device protocol configuration in Plaspy

## Typical Requirements Before Setup

- Device powered and accessible via the manufacturer configuration interface you use (ADM, UART, or command console as applicable).
- Active cellular data SIM or eSIM provisioned for the device with correct APN credentials.
- APN values available for insertion into the device configuration such as [apn], [apnu], and [apnp] placeholders if required.
- Knowledge of the device configuration method used in your deployment for sending AT commands or using manufacturer tools.
- A basic verification plan to confirm the device reaches the Plaspy server and that data appears in Plaspy.
- Installer access to the physical device if a restart or power cycle is required after applying settings.

## How This Tracker Connects to Plaspy

The AS500 sends location and sensor data to the Plaspy endpoint and port you configure on the device. Once the device is configured to target Plaspy, the platform ingests live telemetry and queued transmissions when connectivity is restored.

- The device is configured to report to the shared Plaspy server endpoint and port so all devices use a consistent target.
- Telemetry is transported over UDP or TCP depending on your transport selection during configuration.
- Event reporting such as motion, tamper, or door events is sent to Plaspy to drive alerts and workflows.
- Local queueing on the device stores events during offline periods and Plaspy ingests queued data when the link restores.
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required in the platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the AS500 (ADM, UART console, or the supported AT command channel).
2. Enter the Plaspy server by hostname or IP using d.plaspy.com or 54.85.159.138 as the server endpoint.
3. Set the server port to 8888 for all devices as required by Plaspy.
4. Choose UDP or TCP if the device requires explicit transport selection; Plaspy accepts either and detects the protocol automatically.
5. Configure APN and GPRS parameters using your carrier APN values and the example parameters below if using AT commands.
6. Apply or save the configuration on the device and restart the device if required by the maker or firmware.
7. Validate that the device reports to Plaspy by checking device status via the device command response and confirming data arrival in the Plaspy platform.

## Example Configuration Commands

The AS500 supports AT style commands for configuration. The following public example shows a common order of commands used to prepare the device for Plaspy. Preserve the placeholders [apn], [apnu], and [apnp] with your carrier values when you apply the GPRS command.

- Set ACC event handling and related reporting rules
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set tracking interval to 60 seconds
```text
AT$TRAC=1,60,,,,,2
```

- Set the device to binary mode (formatting mode for upstream packets)
```text
AT$FORM=1,@P,0,""
```

- Set the GPRS server to Plaspy using placeholders for APN credentials
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```

- Verify device status
```text
AT$INFO=?
```

Notes on placeholders
- [apn] is your carrier APN name.
- [apnu] is the APN username when required by the carrier.
- [apnp] is the APN password when the carrier requires one.
Replace the placeholders with the correct values for your SIM or eSIM profile before applying the GPRS command.

## Configuration Notes

- Firmware differences can change exact command syntax or available parameters. Confirm the command set for your firmware version before applying commands.
- Transport choice TCP versus UDP may affect delivery semantics; choose the transport supported by your provisioning workflow and note Plaspy will accept either.
- If you prefer manufacturer software (ADM) or a UART console, follow the vendor recommended process for saving and applying settings rather than sending raw commands unless you are trained to do so.
- APN and GPRS parameters are carrier specific. Use carrier values and keep credentials secure.
- Where available, use the device verification command (for example AT$INFO=? above) to confirm network and server connectivity before completing deployment.

## Why Use Plaspy with This Configuration

Using the AS500 with Plaspy provides a straightforward path to ingest rugged asset telemetry into a single platform. The AS500’s long standby life and support for UDP, TCP, and MQTT allow flexible deployment patterns while the shared Plaspy server settings make large scale provisioning consistent and repeatable.

To learn more about Plaspy and how it manages device ingestion, visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and hardware revision details consult the official ATrack documentation at https://www.atrack.com.tw/ to verify current setup methods and manufacturer guidance.
