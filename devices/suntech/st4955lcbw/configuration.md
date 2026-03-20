---
slug: /suntech/st4955lcbw/configuration
id: st4955lcbw-configuration
sidebar_label: Configuration
title: Suntech - ST4955LCBW Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST4955LCBW showing Plaspy server settings and SMS command examples for fast integration
keywords:
  - Suntech ST4955LCBW configuration
  - Suntech ST4955LCBW setup
  - ST4955LCBW Plaspy
  - Suntech GPS tracker configuration
  - ST4955LCBW server configuration
  - Suntech tracker SMS setup
  - Plaspy tracker configuration
  - asset tracking ST4955LCBW
  - trailer container tracking
  - solar GPS tracker configuration
---

# Suntech - ST4955LCBW Configuration

This page documents the public configuration context for using the Suntech ST4955LCBW with Plaspy. It focuses on the practical server settings and publicly available configuration commands that let the ST4955LCBW report location and telemetry into the Plaspy platform. Where the manufacturer provides SMS templates or configuration fields, those examples are preserved here as an implementation reference.

Plaspy uses shared server values across supported devices and automatically detects tracker protocol during connection. Exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. Use this guide to apply the required Plaspy settings and refer to official Suntech documentation for device specific details and the latest firmware behavior.

## Configuration Overview

The goal of the configuration process is to prepare the ST4955LCBW so it transmits GNSS fixes and telemetry to Plaspy reliably. The public configuration content for this model includes SMS-based templates that set APN and the remote server, plus a reporting profile command to control update intervals.

- Configure the device network settings and APN so the tracker has cellular connectivity.
- Point the tracker to the Plaspy server endpoint so packets reach the Plaspy ingestion service.
- Set reporting intervals and telemetry profile so Plaspy receives location updates at the desired cadence.
- Verify the device ID and use the provided SMS verification command to confirm settings.
- Validate the tracker appears in Plaspy and is sending live data after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 (Plaspy uses the same port for all supported devices)  
- Transport support UDP or TCP on port 8888 depending on device preference or configuration  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and operational ST4955LCBW with a valid SIM and cellular service enabled for data and SMS if SMS configuration is used.  
- Access to the device IMEI so you can derive the device ID used in SMS templates.  
- Knowledge of your cellular operator APN settings including optional username and password if required by the carrier.  
- The manufacturer configuration method available for your unit, for example SMS command access or the vendor configuration tool.  
- A way to send SMS messages to the device if you will apply settings via SMS templates.  
- A Plaspy account and knowledge of the destination device ID you will use inside Plaspy for device registration and verification.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the ST4955LCBW transmits location fixes and telemetry to the Plaspy server endpoint and port. Plaspy ingests those packets and maps them to the device record so location, motion, and sensor data are visible in the platform.

- The tracker is set to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- The device can use UDP or TCP for transport, depending on configuration; Plaspy accepts both on the shared port.  
- Plaspy automatically detects the tracker protocol when the device connects, simplifying server-side setup.  
- Regular reporting intervals and telemetry messages let Plaspy provide live tracking, event alerts, and historical playback.  
- A verification command can be used to request current preset settings from the tracker and confirm the server is set correctly.

## Common Configuration Workflow

1. Access the official Suntech configuration method for your unit (SMS templates, vendor tool, or local BLE configuration) to prepare the device.  
2. Determine the device ID from the IMEI (the device ID is the six digits immediately before the final IMEI digit). Use that device ID in SMS templates or in the vendor tool fields.  
3. Enter the Plaspy server as either d.plaspy.com or 54.85.159.138 and set the remote port to 8888.  
4. Choose UDP or TCP if the device requires a transport selection and save that choice. Plaspy accepts both transports.  
5. Apply or save the configuration on the tracker and restart the device if required by the manufacturer.  
6. Validate that the tracker reports to Plaspy by checking for incoming packets or using the device verification command.  
7. Confirm visibility in your Plaspy account and adjust reporting intervals or telemetry profiles as needed.

## Example Configuration Commands

The following SMS templates are taken from public Suntech configuration content and show how to set APN, the Plaspy server, reporting intervals, and how to request a preset check. Replace DEVICEID with the six digit device ID derived from the IMEI as described above. Preserve placeholders such as [apn], [apnu], and [apnp] and substitute them with your carrier values.

- Set operator APN and GPRS server (server set to Plaspy IP and port). The fourth field is 1 when APN username or password are provided, otherwise 0.

```
SA200NTW;DEVICEID;02;[0 or 1];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Set the update interval to 60 seconds (example reporting profile).

```
SA200RPT;DEVICEID;02;60;60;60;3;0;0;0;0;0
```

- Check current preset settings (verification command).

```
SA200CMD;DEVICEID;02;PresetA
```

Notes on placeholders and device ID:
- DEVICEID: the six digits immediately before the final IMEI digit. For example, if the IMEI is 123456789012345 the DEVICEID would be 901234 in the example provided by the manufacturer.  
- [apn]: your carrier APN string.  
- [apnu]: APN username if required by the carrier; leave blank if not used.  
- [apnp]: APN password if required; leave blank if not used.  
- The transport, server IP, and server port fields above point the tracker to Plaspy using the public values 54.85.159.138 and 8888. Alternatively the domain d.plaspy.com may be used where domain resolution is supported by the device.

## Configuration Notes

- Manufacturers may provide multiple configuration methods; the ST4955LCBW public content includes SMS templates but vendor tools or BLE provisioning may also be available. Use the method appropriate for your deployment.  
- Firmware and hardware revisions can change command syntax or available fields. If an SMS template fails, verify the device firmware version and consult Suntech documentation.  
- Choose UDP or TCP based on your deployment needs; Plaspy accepts either on the shared port and will detect the protocol automatically.  
- Because Plaspy uses a consistent port for all devices, ensure firewall or network rules allow outbound device connections to port 8888.  
- Keep carrier APN credentials and SMS templates secure. Test commands on a single device before mass deployment.

## Why Use Plaspy with This Configuration

Combining the Suntech ST4955LCBW with Plaspy provides a practical path to long-term outdoor asset visibility. The device's low-power design and extended telemetry options make it suitable for distributed assets, and pointing the tracker to Plaspy's shared server values is straightforward using the public SMS templates or vendor tools. Once configured, Plaspy ingests location and telemetry so fleets and asset managers can monitor status, receive alerts, and analyze historical movement.

To learn more about Plaspy and how it integrates with devices like the ST4955LCBW visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer support information verify details with Suntech at http://www.suntechint.com/ as setup methods and firmware behavior can change over time.
