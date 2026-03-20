---
slug: /globalsat/lt_520/configuration
id: lt_520-configuration
sidebar_label: Configuration
title: GlobalSat - LT-520 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat LT-520 showing Plaspy server settings and example SMS commands for integration
keywords:
  - GlobalSat LT-520 configuration
  - LT-520 setup
  - LT-520 Plaspy
  - Plaspy tracker setup
  - GlobalSat GPS tracker configuration
  - asset tracking setup
  - LoRaWAN tracker configuration
  - GPS platform setup
  - fleet management tracker setup
  - LT-520 SMS configuration
---

# GlobalSat - LT-520 Configuration

This page covers the public configuration context for using the GlobalSat LT-520 with the Plaspy platform. It focuses on the practical server settings and setup workflow you need to point the device at Plaspy and validate that it reports correctly. Where available, example commands from the manufacturer are included for reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The LT-520 vendor documentation and the example SMS commands shown below are provided as public guidance; verify details against the manufacturer resources for the specific firmware or variant you have.

## Configuration Overview

The goal of configuration is to prepare the LT-520 to send location and telemetry to Plaspy so the device appears in the platform and can be monitored in real time. This typically involves setting the server endpoint, port, transport type, and any network parameters the device requires.

- Point the tracker to the Plaspy server endpoint so uplinks are received by Plaspy.
- Configure the device transport and port so the tracker can establish a connection.
- Provide any network credentials required by the device configuration method, for example APN values if using an IP based uplink via cellular SMS commands.
- Save and apply settings, then restart or reboot the device as required to activate the new configuration.
- Validate device visibility and telemetry in Plaspy once the device reports to the platform.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices use the same port for server connections

These exact values are the public Plaspy endpoint and must be used when configuring the tracker to report directly to Plaspy.

## Typical Requirements Before Setup

- Access to the official manufacturer configuration method or software for the LT-520.
- The device powered and reachable for configuration; follow the installation guidance from GlobalSat.
- If using SMS based configuration, ensure the device has an active SIM and can receive SMS messages.
- IMEI of the device available for use in SMS commands or in the vendor tool.
- APN and network credentials when the device requires cellular data settings for IP uplinks (placeholders are used in example commands).
- A way to receive device logs or status responses after configuration to confirm successful setup.

## How This Tracker Connects to Plaspy

Depending on firmware and vendor tools, the tracker can be configured to report to Plaspy using an IP uplink or via a backend network. In all cases Plaspy receives tracker data at the same shared server endpoint and port, and it will automatically detect the protocol used by the device.

- The tracker is configured to report to the shared Plaspy server endpoint d.plaspy.com on port 8888.
- Plaspy accepts either UDP or TCP transport and will detect the protocol automatically.
- Once configured, the device sends location and telemetry to Plaspy where it becomes visible in the platform.
- The platform uses the incoming telemetry for real time monitoring, alerts, and history.
- Validation steps confirm that the device is successfully reporting to Plaspy on the shared port.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method or software for the LT-520, or prepare to send SMS commands if supported by your device firmware.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device configuration.
3. Set the server port to 8888; note that Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure any additional network parameters such as APN, APN user, and APN password if using cellular IP uplinks.
6. Apply or save the configuration in the vendor tool or send the SMS configuration commands as shown below.
7. Restart or reboot the device if required to apply settings.
8. Validate that the device appears and reports correctly in Plaspy.

## Example Configuration Commands

The LT-520 vendor material includes SMS command examples for setting the server and rebooting the device. These commands are public and are shown here in cleaned form. Preserve the placeholders when you substitute your values.

Note on format: the manufacturer page indicates an overall message format example such as
TSPRXAB27GHKLMnaicz*U!
Below are the two commands extracted from the vendor content.

1) Setup the tracker to report to Plaspy
- Description: replace {{imei}} with the device IMEI and {{apn}}, {{apnu}}, {{apnp}} with the APN, APN user, and APN password required by your cellular provider. The command requires a checksum value appended before the final exclamation mark. The checksum is computed by XORing the byte values of the command string prior to the asterisk and converting the result to a two digit uppercase hexadecimal string.

Example SMS command:
```text
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

2) Reboot the device (optional, use if a restart is needed to apply settings)
- Description: replace {{imei}} and provide the correct checksum for the reboot command string in the same way as above.

Example SMS reboot command:
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum generation summary
- The public vendor script computes the checksum by XORing the character codes of the command text up to but not including the asterisk, then converting the numeric result to an uppercase two character hexadecimal string. Many vendor tools compute this automatically; if sending SMS manually you must calculate and add the checksum value.

Placeholders explained
- {{imei}}: the device IMEI number
- {{apn}}: APN name for cellular data
- {{apnu}}: APN user name if required
- {{apnp}}: APN password if required
- {{checksum}} and {{checksumreeboot}}: computed checksum values as described above

## Configuration Notes

- Firmware differences can change which configuration methods are available; check the GlobalSat documentation for your device firmware before proceeding.
- The vendor-provided SMS method is one public approach; other methods such as a configuration tool, BLE provisioning, or LoRaWAN backend configuration may be available depending on the LT-520 variant.
- Choose TCP or UDP transport based on your network environment and the device firmware option; Plaspy supports both and will auto detect the tracker protocol.
- Plaspy requires the shared port 8888 for all devices; do not change this when pointing devices to Plaspy.
- Always verify IMEI and APN values before sending configuration commands to avoid misconfiguration.

## Why Use Plaspy with This Configuration

Using the LT-520 with Plaspy gives organizations a way to receive long life asset tracking and hybrid indoor/outdoor location data in a centralized fleet or asset management platform. With the Plaspy server endpoint and port set correctly, devices report telemetry and events so operations teams can monitor location, motion, and device health from a single pane of glass.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup information with GlobalSat at https://www.globalsat.com.tw/.
