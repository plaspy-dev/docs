---
slug: /appello/gt01/configuration
id: gt01-configuration
sidebar_label: Configuration
title: Appello - GT01 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Appello GT01 GPS tracker for use with Plaspy including SMS setup APN and server settings
keywords:
  - Appello GT01 configuration
  - Appello GT01 server configuration
  - Appello GT01 setup for Plaspy
  - Appello GT01 tracking software configuration
  - Appello GT01 GPS platform setup
  - Plaspy device configuration
  - GPS tracker SMS setup
  - GT01 APN configuration
  - GT01 GPRS server setup
  - vehicle tracker configuration
---

# Appello - GT01 Configuration

This page provides public configuration guidance for using the Appello GT01 tracker with the Plaspy platform. It collects the shared Plaspy server settings and the common, manufacturer published SMS commands used to prepare the GT01 for reporting to Plaspy. Use this as a practical reference for applying the public configuration steps required to make the device visible in Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when a device connects. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflow below as documented public guidance and verify any device specific details against the manufacturer documentation.

## Configuration Overview

The GT01 must be prepared so it can establish a mobile data session and send position and status messages to the Plaspy server endpoint. The public configuration focuses on APN and GPRS server parameters and a short set of SMS commands the manufacturer provides.

- Configure the device APN and optional APN credentials so the tracker can access mobile data.
- Point the GT01 to the Plaspy server endpoint and port so messages are delivered to the platform.
- Choose the transport if the device requires a selection between UDP and TCP.
- Save and restart or apply the settings so the tracker begins reporting to Plaspy.
- Verify the tracker is visible in Plaspy and confirm data is arriving as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These server values are the public Plaspy endpoint that GT01 devices should report to when configured for use with Plaspy.

## Typical Requirements Before Setup

- A charged GT01 and any installation power connection required for initial configuration.
- A valid SIM card provisioned for data and SMS from your mobile operator.
- The correct APN, APN username, and APN password for the SIM operator.
- Access to the manufacturer's documented configuration method typically SMS commands or vendor tools.
- Note of the device password if the device requires it for SMS commands; the public sample uses 123456 as the default.
- Ability to send and receive SMS messages to the tracker for SMS based configuration and verification.

## How This Tracker Connects to Plaspy

The GT01 is configured to report location and device status to the shared Plaspy server endpoint and port so Plaspy can ingest and display telemetry automatically.

- The tracker uses the configured APN and mobile data to establish GPRS connectivity.
- It sends location and status messages to the Plaspy server at d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Plaspy accepts connections over UDP or TCP and detects the device protocol automatically.
- Once reporting, the device becomes visible in Plaspy for live tracking and event monitoring.
- Platform visibility enables operational monitoring, alerts, and historical playback within Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the GT01, typically SMS commands as provided by the vendor.
2. Ensure the SIM is active and set the APN using the operator APN value for your mobile provider.
3. Enter the Plaspy server endpoint by specifying d.plaspy.com or the server IP 54.85.159.138 as required by the GT01 command format.
4. Set the server port to 8888 and select UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration and restart the device if the tracker firmware requires a reboot to apply changes.
6. Validate that the device reports to Plaspy by checking device visibility in the platform and using the tracker verification command if available.

The sample GT01 SMS commands below follow this workflow and show how to set APN values and the GPRS server to the Plaspy endpoint.

## Example Configuration Commands

The GT01 supports SMS based configuration using the device password in the command syntax. The public sample configuration uses the default device password 123456. Preserve the placeholders as shown when replacing with your operator values.

1. Optional factory reset step (use only when needed)
```text
FORMAT
```

2. Set the operator APN
```text
apn123456 [apn]
```
- Replace [apn] with your mobile operator APN value.

3. Set the APN username if required by your operator
```text
apnuser123456 [apnu]
```
- Replace [apnu] with the APN username. If not required leave blank or skip.

4. Set the APN password if required by your operator
```text
apnpasswd123456 [apnp]
```
- Replace [apnp] with the APN password. If not required leave blank or skip.

5. Set the GPRS server to Plaspy
```text
ip54.85.159.138 8888
```
- This command points the device directly to the Plaspy server IP and port. Alternatively you can specify the server domain d.plaspy.com if the device accepts domain names.

6. Verify or check current settings
```text
CXZT
```
- Use this verification command to request the tracker send its current configuration back via SMS.

Notes on the commands
- The numeric sequence 123456 shown in these commands is the sample factory password used in the public example. Replace it with your device password if it differs.
- Keep the command order when applying initial configuration so APN and server values are set before validation.
- Placeholders [apn] [apnu] and [apnp] should be replaced with your operator values exactly as required by the SMS syntax.

## Configuration Notes

- The GT01 supports SMS based configuration according to the manufacturer sample commands, but some regions or firmware versions may also support configuration via vendor software.
- Firmware revisions and hardware versions can change command syntax or required steps. Verify the exact command format for your device firmware.
- Choose UDP or TCP based on your tracker or network needs; Plaspy supports both transports and will detect the device protocol automatically.
- Plaspy uses the same port 8888 for all supported devices so use that port when pointing devices to the Plaspy endpoint.
- If you perform a factory reset use it only when necessary as it will clear stored settings including APN and server configuration.

## Why Use Plaspy with This Configuration

Configuring the Appello GT01 to report to Plaspy provides a simple and consistent integration path for organizations that need reliable visibility into assets and vehicles. By using the shared Plaspy server endpoint and port, you reduce per device variability and let Plaspy automatically detect the device protocol for streamlined onboarding.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific setup notes firmware details and official command reference consult the manufacturer documentation at http://www.cnjeo.com/ as manufacturer specifications and setup methods can change over time.
