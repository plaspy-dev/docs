---
slug: /teltonika/fm_2100/configuration
id: fm_2100-configuration
sidebar_label: Configuration
title: Teltonika - FM 2100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Teltonika FM 2100 to connect with Plaspy using shared server settings and common setup commands
keywords:
  - Teltonika FM 2100 configuration
  - Teltonika FM 2100 setup
  - FM 2100 server configuration
  - FM 2100 Plaspy setup
  - GPS tracker configuration Plaspy
  - vehicle tracking FM 2100
  - Plaspy server configuration
  - Teltonika SMS configuration
  - fleet tracking FM 2100
  - FM 2100 network setup
---

# Teltonika - FM 2100 Configuration

This page covers the public configuration context for using the Teltonika FM 2100 tracker with Plaspy. It explains the practical server settings and the common setup workflow to point the device at Plaspy so the tracker can report location and basic device data to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and the configuration tools you use. Use this page as a practical guide and always review device documentation from the manufacturer for device specific details.

## Configuration Overview

Configuring the FM 2100 for Plaspy prepares the tracker to communicate with the Plaspy backend and ensures the device is visible in the platform once it has network connectivity. The setup focuses on setting correct APN and server parameters, choosing transport where required, and validating that the device is reporting to Plaspy.

- Apply the network APN settings required for your SIM and mobile operator so GPRS data is available.
- Set the Plaspy server endpoint and the shared port so the tracker sends data to the Plaspy service.
- Select UDP or TCP transport on the device when required by the configuration method.
- Save and apply the configuration and optionally restart the tracker so new settings take effect.
- Verify connectivity and that the device appears in Plaspy for monitoring and event reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy server settings to enter on your device or in your SMS batch command as shown in the example section.

## Typical Requirements Before Setup

- A powered FM 2100 unit installed or accessible for configuration and testing.
- A valid cellular SIM with a data plan and the correct APN for your mobile operator.
- Access to the official Teltonika configuration method you use in your environment such as SMS batch commands or manufacturer tools.
- Device phone number or connection method to send SMS commands if using SMS based configuration.
- Knowledge of how to save and apply settings on the device and a plan to restart the device if required.
- Access to Plaspy so you can validate that the device appears and reports after configuration.

## How This Tracker Connects to Plaspy

When configured, the FM 2100 will send its location and device data to the Plaspy server endpoint and port so the device is visible and manageable within the Plaspy platform. Plaspy detects the device protocol automatically and accepts data on the shared port used across supported devices.

- The tracker reports to the Plaspy server d.plaspy.com or directly to 54.85.159.138 at port 8888.
- Transport can be configured as UDP or TCP based on device settings or preference.
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required in the platform.
- Once reporting, location updates and status messages become available for monitoring and operational use in Plaspy.
- Validation inside Plaspy confirms the device is communicating successfully with the shared Plaspy endpoint.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the FM 2100, or prepare to send SMS batch commands as supported by the device.  
2. Enter the Plaspy server address either as d.plaspy.com or 54.85.159.138 in the server field.  
3. Set the server port to 8888 to match the Plaspy shared port.  
4. Choose UDP or TCP if the device requires a transport selection during configuration.  
5. Enter APN settings for your SIM using the official configuration method, including APN user and APN password as needed.  
6. Apply or save the configuration and restart the device if your configuration tool or the device requires a restart.  
7. Validate that the device reports to Plaspy by confirming visibility and incoming messages in the Plaspy platform.

## Example Configuration Commands

The FM 2100 supports SMS batch commands for basic parameter configuration. The following public command sets APN parameters and configures the device to report to Plaspy. Preserve the placeholders and replace them with your operator values before sending.

- Batch command example (preserve placeholders when replacing with your values):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explanation of placeholders and fields in the command example:
  - [apn] is the mobile network APN required for data connectivity.
  - [apnu] is the APN username if your operator requires one, otherwise leave empty.
  - [apnp] is the APN password if required by the operator.
  - 2004 is set to d.plaspy.com to point the tracker at the Plaspy server domain.
  - 2005 is set to 8888 which is the shared Plaspy port used by all devices.
  - 2006 is included in the batch to set a transport related flag in the device batch sequence; consult Teltonika documentation for the exact meaning of its possible values.

- How to apply the command:
  - Send the single SMS text above to the FM 2100 device phone number if using SMS configuration.
  - Alternatively use Teltonika configuration tools that accept batch parameter strings and apply the same parameter values.
  - After sending, save settings and restart the device if required by your chosen configuration method.

## Configuration Notes

- Firmware and hardware revisions can change parameter names, numbers, and accepted values; always confirm parameter mappings with Teltonika documentation for your firmware version.
- TCP versus UDP transport selection is performed on the device side when required; Plaspy accepts either and automatically detects the device protocol once data arrives on port 8888.
- SMS based configuration is a common public method for Teltonika devices and is demonstrated here as a practical example.
- Using the domain d.plaspy.com is preferred for clarity, while the IP 54.85.159.138 is provided as an alternate endpoint reference.
- All devices in Plaspy use the same port 8888 so you do not need to manage different ports per device on the platform side.

## Why Use Plaspy with This Configuration

Using the Teltonika FM 2100 configured to report to Plaspy provides a straightforward path to get real time location visibility and basic remote device monitoring on a centralized platform. For organizations that need fleet and asset visibility, this configuration ensures the FM 2100 reports to a shared, consistent Plaspy endpoint so devices are quickly visible and manageable.

Learn more about Plaspy and how it handles device connections at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and detailed parameter references please verify information with the manufacturer at https://www.teltonika-gps.com/ before deploying.
