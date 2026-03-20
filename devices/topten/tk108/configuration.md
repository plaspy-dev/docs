---
slug: /topten/tk108/configuration
id: tk108-configuration
sidebar_label: Configuration
title: TopTen - TK108 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TopTen TK108 GPS tracker and Plaspy compatibility with practical setup steps
keywords:
  - TopTen TK108 configuration
  - TopTen TK108 setup
  - TopTen TK108 server configuration
  - TK108 Plaspy setup
  - TK108 GPS tracker configuration
  - Plaspy tracker configuration
  - GPS platform setup
  - vehicle tracking configuration
  - TK108 SMS commands
  - tracker GPRS setup
---

# TopTen - TK108 Configuration

This page documents the public configuration context for using the TopTen TK108 vehicle tracker with Plaspy. It compiles the practical, publicly available steps and SMS commands that are commonly used to prepare the TK108 for communicating with a third party server such as Plaspy. The content here is grounded in the TopTen TK108 description and the supplied public configuration commands where applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools. Where TopTen provides SMS commands and GPRS parameters for the TK108, those commands are included below as public examples to help connect the device to Plaspy.

## Configuration Overview

Configuring the TK108 for Plaspy centers on providing the tracker with the correct server endpoint, GPRS/APN settings, and ensuring the tracker identifier is known so the device appears on the Plaspy platform. The TK108 also supports SMS control and can report events like engine on off, power loss, and SOS alerts which help with operational monitoring.

- Prepare the device to send location and event data to the Plaspy endpoint.
- Provide APN and GPRS server information so the tracker can use mobile data.
- Set the device reporting server to Plaspy using the shared server address and port.
- Verify the tracker identifier (usually derived from the IMEI) so Plaspy can map the device to an account.
- Validate connectivity and event reporting in Plaspy after applying configuration.

## Plaspy Server Settings

When configuring the TK108 for use with Plaspy, use the following public server settings exactly as shown:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP; the device may be configured to use either protocol on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A TK108 device powered and accessible for configuration and testing.
- A valid cellular SIM with an active data plan and SMS capability to send configuration messages if using SMS commands.
- The APN credentials for the SIM provider to configure GPRS on the tracker.
- Knowledge of the device IMEI so you can determine the tracker identifier used by Plaspy.
- Access to the TopTen manufacturer configuration instructions or installer tools for your firmware version.
- A method to receive device responses such as SMS replies from the tracker or monitoring in Plaspy after configuration.

## How This Tracker Connects to Plaspy

The TK108 is configured to communicate with the shared Plaspy server endpoint and port so that location and event messages are routed into the Plaspy platform for visibility and monitoring. Plaspy’s automatic protocol detection allows the same server and port to accept data from many tracker protocols.

- The tracker is set to report to the Plaspy server domain or IP and port 8888.
- Data and events are transmitted over GPRS to the configured server using either UDP or TCP.
- The tracker identifier used by Plaspy is derived from the device IMEI as described in the manufacturer commands.
- Plaspy receives the incoming messages, detects the tracker protocol automatically, and associates messages with the device ID for visibility in the platform.
- After configuration, validate that position updates and alerts appear in Plaspy.

## Common Configuration Workflow

1. Access the official TopTen configuration method for your TK108, typically SMS commands or the manufacturer software, and confirm the device firmware behavior.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the tracker configuration.
3. Set the server port to 8888; Plaspy uses the same port across supported devices.
4. Choose UDP or TCP transport on the device if the tracker requires an explicit selection.
5. Configure APN and GPRS parameters so the device can connect to mobile data networks.
6. Apply or save the configuration on the tracker and restart the device if required by the device or firmware.
7. Validate that the device reports to Plaspy and that location or event messages appear in the platform.

## Example Configuration Commands

TopTen provides SMS-based configuration commands for the TK108. The following public commands are typical examples extracted from manufacturer guidance. Preserve placeholders as shown and replace them with values for your SIM provider.

- Optional initial factory restore (use only when needed or when preparing a fresh configuration):
```text
111111CLR
```

- Example SMS command to set GPRS APN and the Plaspy server by IP with port 8888:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explanation of placeholders:
- {{apn}} is the APN name for your mobile operator.
- {{apnu}} is the APN username if required by the operator; may be empty for many carriers.
- {{apnp}} is the APN password if required by the operator; may be empty for many carriers.

- Example command to request and check current settings on the device:
```text
111111WWW:
```

Additional notes from manufacturer guidance:
- The tracker ID used by Plaspy corresponds to the last 14 digits of the IMEI as returned by the device PAR command or status response. Use the device IMEI to determine the identifier you will see in Plaspy.

## Configuration Notes

- SMS based configuration is commonly used with the TK108; ensure SMS delivery is reliable before relying solely on SMS for setup.
- Firmware revisions and vendor variants can change command syntax or available parameters; confirm commands against your device firmware.
- Choose UDP or TCP based on network reliability and any vendor guidance; Plaspy accepts either on port 8888 and will detect protocol automatically.
- Use the server IP or domain exactly as provided when setting the tracker: d.plaspy.com or 54.85.159.138 and port 8888.
- Keep backups of any configuration you change and record the device IMEI so it can be matched to the identifier shown in Plaspy.

## Why Use Plaspy with This Configuration

Using the TK108 with Plaspy provides a straightforward path to centralize vehicle location, event alerts, and operational monitoring. The TK108’s SMS control, event reporting, and offline logging make it a useful candidate for fleet or vehicle security installations, and configuring the tracker to report to Plaspy ensures those messages are collected and visualized in one platform.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. Please verify the latest device specific configuration instructions and firmware behavior with the manufacturer at http://www.t10.cn since manufacturer procedures and firmware features can change over time.
