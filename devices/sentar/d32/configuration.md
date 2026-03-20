---
slug: /sentar/d32/configuration
id: d32-configuration
sidebar_label: Configuration
title: Sentar - D32 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Sentar D32 wearable GPS tracker showing Plaspy server settings and example SMS commands for integration
keywords:
  - Sentar D32 configuration
  - Sentar D32 setup
  - D32 Plaspy configuration
  - D32 GPS smartwatch setup
  - Sentar smartwatch Plaspy
  - D32 tracking software configuration
  - D32 server settings
  - Sentar D32 APN setup
  - GPS tracker configuration Plaspy
  - wearable GPS tracker setup
---

# Sentar - D32 Configuration

This page covers the public configuration context for using the Sentar D32 smartwatch with Plaspy. It explains the server endpoint and the high-level setup steps you can use to point a D32 device at Plaspy so the device reports location, telemetry, and event information into the Plaspy platform. The D32 is a Plaspy compatible 4G Android GPS smartwatch with multi mode positioning and a Nano SIM slot, and this guide focuses on the publicly available configuration flow and example SMS commands where provided.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and vendor tools. The D32 can be configured using SMS commands as shown in the public model configuration below, or via manufacturer tools when available. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so the essential server settings are consistent for integration.

## Configuration Overview

This configuration process prepares the D32 to communicate reliably with Plaspy by setting network parameters, the Plaspy server endpoint, and reporting behavior. The public commands supplied by the manufacturer are typically sent by SMS to the device or applied with a vendor configuration tool. The goal is to make the device visible in Plaspy for live tracking and event notification.

- Configure the device APN and GPRS settings so it has data connectivity to reach Plaspy.
- Point the device GPRS server to Plaspy using the shared server endpoint and port so telemetry uploads are accepted.
- Choose UDP or TCP transport on the device if required, matching Plaspy support.
- Set upload intervals and time zone so location reporting frequency and timestamps match your needs.
- Verify settings with a device status query and confirm the device appears in Plaspy.

## Plaspy Server Settings

- Use server domain d.plaspy.com as the primary server endpoint for the device.
- Server IP for direct IP configuration is 54.85.159.138.
- Port to use for all devices is 8888.
- The device may be configured to use either UDP or TCP transport on port 8888.
- Plaspy automatically detects the tracker protocol once the device connects to the server and uses the same port for all supported devices.

## Typical Requirements Before Setup

- A charged D32 device with a working Nano SIM installed and active data service.
- Access to the device for SMS configuration or to the official manufacturer configuration tool when provided by Sentar.
- APN credentials for the mobile operator if the SIM requires manual APN setup.
- The default device password if SMS commands require authentication (the public examples below use 123456).
- Basic understanding of choosing UDP or TCP transport and expected upload interval for your monitoring needs.
- A Plaspy user account and knowledge of how to confirm device presence in the Plaspy platform.

## How This Tracker Connects to Plaspy

The D32 is configured to send its location and device events over the cellular network to the shared Plaspy server endpoint and port. Once configured, Plaspy ingests the tracker data, maps the device, and exposes telemetry and alerts through the Plaspy interface. Plaspy's automatic protocol detection removes the need to manually select a protocol mapping in most cases.

- The device sends GNSS and assisted location data to d.plaspy.com or 54.85.159.138 on port 8888.
- Telemetry and event messages are uploaded at the configured interval so Plaspy displays near real time positions.
- Alerts such as SOS presses are forwarded to Plaspy and can be routed into incident workflows.
- Plaspy detects the device protocol automatically when the device connects to the shared port and begins parsing messages.
- Connection transport can be UDP or TCP depending on device configuration and network conditions.

## Common Configuration Workflow

1. Access the official Sentar configuration method, either the vendor mobile app, web tool, or SMS command interface as documented by Sentar.
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or the direct IP 54.85.159.138 in the device GPRS/server settings.
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure APN values for the device carrier using the provided APN placeholders if necessary.
6. Apply or save the configuration and restart the device if required by the vendor instructions.
7. Validate the device reports to Plaspy by checking device status in Plaspy or by using the device verification command shown below.

## Example Configuration Commands

The following example SMS commands are extracted from the public Sentar D32 configuration content. These are provided as examples only and reflect the publicly posted command set. The sample setup uses the default device password 123456 where required. Labeling notes: the factory reset command is optional and should be used only when needed during initial provisioning or troubleshooting.

1. Factory reset (optional initial setup)
```text
pw,123456,factory#
```

2. Set the time zone to UTC+0
```text
pw,123456,lz,0,0#
```

3. Check the MCC and MNC (operator identifiers)
```text
pw,123456,imsi#
```

4. Set the operator APN where xxx is MCC and yy is MNC
Note: these placeholders must be replaced with values from the SIM operator. Preserve the APN placeholders as shown.
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
- {{apn}} = APN name for the carrier
- {{apnu}} = APN username if required
- {{apnp}} = APN password if required
- xxxyy = combined MCC and MNC digits when this format is required by the device

5. Set the GPRS server to point to Plaspy (direct IP example)
```text
pw,123456,ip,54.85.159.138,8888#
```
Alternatively you can use the domain:
```text
pw,123456,ip,d.plaspy.com,8888#
```

6. Set upload interval to 300 seconds
```text
pw,123456,upload,300#
```

7. Check current settings on the device
```text
pw,123456,ts#
```

If your device uses a different SMS syntax or a configuration tool from Sentar, follow that method and apply these same server domain or IP and port values. Replace placeholders like {{apn}}, {{apnu}}, and {{apnp}} with your carrier details.

## Configuration Notes

- Manufacturer SMS syntax and parameter order can vary by firmware version; always verify the exact command format in Sentar documentation for your device firmware.
- Use SMS-based setup only when it is supported and practical for your deployment; vendor tools may provide bulk provisioning or a GUI to avoid manual SMS commands.
- When the device asks for transport selection choose UDP or TCP based on network reliability and any guidance from Sentar; Plaspy accepts both on port 8888.
- Confirm APN credentials with the mobile operator before entering them; incorrect APN values will prevent the device from reaching d.plaspy.com.
- The default password 123456 is shown in public examples; change device passwords where possible to meet your security policies after initial provisioning.

## Why Use Plaspy with This Configuration

Configuring the Sentar D32 to report to Plaspy gives organizations reliable wrist worn tracking and event reporting that integrates into a broader situational awareness platform. The shared Plaspy server endpoint and port simplify device onboarding across device types because the same server settings are used consistently, and Plaspy automatically detects the tracker protocol for parsing messages and displaying telemetry.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup guidance on the manufacturer's site at http://www.sentarsmart.com/ before large scale deployments.
