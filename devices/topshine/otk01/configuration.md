---
slug: /topshine/otk01/configuration
id: otk01-configuration
sidebar_label: Configuration
title: TopShine - OTK01 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the TopShine OTK01 tracker showing Plaspy server settings and SMS commands for GPRS reporting
keywords:
  - TopShine OTK01 configuration
  - TopShine OTK01 setup
  - OTK01 Plaspy integration
  - OTK01 server configuration
  - TopShine GPS tracker setup
  - OTK01 SMS commands
  - Plaspy server settings
  - vehicle tracking configuration
  - OBD II tracker configuration
  - fleet tracking setup
---

# TopShine - OTK01 Configuration

This page documents the public configuration context for using the TopShine OTK01 OBD II GPS tracker with the Plaspy platform. It gathers the practical server settings and the manufacturer provided SMS commands that are commonly used to prepare the device for GPRS reporting to Plaspy. Use this guidance together with the device manual and official TopShine resources for device-specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Manufacturer-side setup steps and tools can vary by firmware, hardware revision, installation type, and vendor utilities, so apply the commands and settings below while confirming the exact workflow with TopShine documentation and the device label information.

## Configuration Overview

This configuration prepares an OTK01 unit to report location and vehicle telemetry to the Plaspy tracking platform using GPRS or SMS for fallback. The goal is to configure the device server endpoint, ensure the mobile data APN is correct, and verify the device appears in Plaspy.

- Configure the OTK01 to use Plaspy as its GPRS reporting endpoint so position and telemetry reach the platform.
- Verify APN and GPRS mode so cellular data uploads succeed and SMS remains available for command responses.
- Set device identifier (IMEI related) so Plaspy can map the tracker to the right device record.
- Validate connectivity to Plaspy and confirm updates arrive in the platform for live location and event monitoring.
- Optionally reset to factory settings when preparing a device for new deployment or troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so use 8888 for device server configuration

## Typical Requirements Before Setup

- A powered OTK01 installed in the vehicle OBD II port or otherwise powered according to manufacturer guidance.
- An active SIM card with voice/SMS and data or SMS capability as required by your deployment; ensure the operator APN is known.
- Access to the device IMEI (printed on the device or retrievable via SMS command) to set device identifiers correctly.
- A phone able to send SMS commands to the tracker for configuration or access to the manufacturer software if provided.
- Access to Plaspy with device provisioning information so you can verify the device reports after configuration.
- The official TopShine user manual or command reference to confirm firmware specific command syntax and default password.

## How This Tracker Connects to Plaspy

The OTK01 can send position and vehicle telemetry to Plaspy by uploading data over GPRS to the shared Plaspy server endpoint and port. Plaspy accepts those connections and matches incoming data to the device by IMEI or configured device id.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com or IP 54.85.159.138 on port 8888.
- The device may use UDP or TCP transport on port 8888 depending on device settings and operator requirements.
- Plaspy automatically detects the protocol used by the tracker so devices can be configured with either transport type.
- Once connected, the tracker provides location updates and event reports so Plaspy can display live position and telemetry.
- SMS remains available for command-based queries and fallback reporting where configured.

## Common Configuration Workflow

1. Access the official TopShine configuration method for your OTK01 unit, typically SMS commands or vendor software, and confirm the device password and IMEI.
2. In the device configuration, enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888. Note that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP on the device if it requires explicit transport selection.
5. Configure the operator APN values if required so the device can establish a GPRS data session.
6. Apply or save the configuration and restart the device if the device requires a reboot to activate settings.
7. Validate that the OTK01 reports to Plaspy by checking that position updates or a test report appear in your Plaspy account or by monitoring incoming connections on the server side.

## Example Configuration Commands

The following SMS commands are the public commands provided with the OTK01 configuration guidance. Commands are shown in the order commonly used during initial setup. The default device password in these examples is 000000 as provided by the manufacturer. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN, APN username, and APN password where applicable.

- Optional initial factory reset (use only when you intend to restore factory defaults):
```text
W000000,990,099###
```

- Set the device ID. Use the first 14 digits from the device IMEI when sending this command. Plaspy will normally identify the device by its full IMEI.
```text
W000000,010,<first_14_digits_of_IMEI>
```

- Set the operator APN. Replace {{apn}} with your operator APN. If your APN requires a username or password, include {{apnu}} and {{apnp}} after the APN.
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```

- Set the GPRS server to the Plaspy endpoint using the public Plaspy IP and port.
```text
W000000,012,54.85.159.138,8888
```

- Switch the device to GPRS reporting mode (example value 2 configures GPRS mode on many TopShine firmware versions).
```text
W000000,013,2
```

- Set the reporting/update interval (example value 6 shown; adjust according to your reporting policy and device firmware).
```text
W000000,014,6
```

- Retrieve the device IMEI via SMS response:
```text
W000000,601
```

Notes on placeholders:
- {{apn}} is your mobile network operator APN string.
- {{apnu}} is the APN username if required by the operator.
- {{apnp}} is the APN password if required by the operator.
- Replace <first_14_digits_of_IMEI> with the actual digits from the device IMEI as instructed.

## Configuration Notes

- Command syntax and available parameters can vary by firmware version; confirm exact SMS formats with TopShine documentation for your device batch.
- SMS-based configuration is supported by the OTK01 as shown, but GPRS configuration is required for continuous reporting to Plaspy.
- Choose UDP or TCP based on network conditions and your operational preferences. Plaspy accepts both and will auto detect protocol.
- The server and port settings in these commands point to Plaspy (d.plaspy.com or 54.85.159.138 on port 8888); do not change the port unless instructed by Plaspy support.
- The factory reset command is optional and recommended only when re-provisioning or troubleshooting a device.

## Why Use Plaspy with This Configuration

Configuring the TopShine OTK01 to report to Plaspy gives fleet operators reliable real-time location and vehicle telemetry with minimal installation effort. The OBD II plug-and-play design paired with Plaspy reporting supports quick onboarding of vehicles, continuous monitoring, and historical route playback when connectivity resumes.

To learn more about Plaspy and how to manage OTK01 devices at scale visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and hardware details verify information on the manufacturer website https://www.gztopshine.com/ as hardware revisions and firmware behavior can change over time.
