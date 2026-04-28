---
slug: /aovx/gg100/configuration
id: gg100-configuration
sidebar_label: Configuration
title: AOVX - GG100 Configuration
sidebar_class_name: menu_item_tracker
description: AOVX GG100 configuration guide for Plaspy server setup and practical tracker integration
keywords:
  - AOVX GG100 configuration
  - AOVX GG100 setup for Plaspy
  - GG100 server configuration
  - GG100 GPS tracker setup
  - GG100 tracking software configuration
  - GG100 GPS platform setup
  - Plaspy compatible GPS tracker
  - goods GPS tracker setup
  - asset tracking configuration
  - cold chain tracker setup
---

# AOVX - GG100 Configuration

This page covers the public configuration context for using the AOVX GG100 with Plaspy. The GG100 is described as an ultra-thin goods GPS tracker designed for installation-free deployment in logistics and supply-chain operations, with multi-mode positioning and on-board environmental sensing. The public setup information below focuses on how to point the device to Plaspy and what to verify before deployment.

Plaspy uses shared server settings across supported devices, and it automatically detects the tracker protocol. That means the same Plaspy port is used for all supported devices, while exact manufacturer-side setup steps can still vary depending on firmware, hardware revision, installation type, and the vendor tools used to apply configuration.

## Configuration Overview

Configuring the GG100 for Plaspy is mainly about preparing the device to communicate with the Plaspy server endpoint, confirming the transport settings, and validating that the tracker reports correctly after setup. The public configuration flow provided for this model uses SMS commands, which is a practical approach for applying the server and reporting parameters before the tracker begins sending data.

- Set the tracker to report to the shared Plaspy server endpoint.
- Use the same port value used by Plaspy for supported devices.
- Apply a reporting interval that fits the monitoring needs of your deployment.
- Switch the device into GPRS reporting mode so it can transmit data.
- Verify the saved parameters after configuration.
- Confirm that the device is visible in Plaspy after the setup is applied.

## Plaspy Server Settings

- Server domain used for configuration is d.plaspy.com.
- Server IP address used for configuration is 54.85.159.138.
- The port is 8888.
- The device may be configured using UDP or TCP on port 8888.
- Plaspy automatically detects the tracker protocol once the device connects.
- All supported Plaspy devices use the same port value, which simplifies deployment across mixed tracker models.

## Typical Requirements Before Setup

- Have the tracker powered and ready for configuration.
- Confirm that you can access the official manufacturer configuration method or software.
- Make sure you have the public Plaspy server details ready before sending commands or saving settings.
- Verify that the device is intended to communicate over the supported transport mode for your deployment.
- Check the manufacturer documentation for any model or firmware specific setup differences.
- Keep the device nearby so you can confirm that configuration changes are accepted and preserved.

## How This Tracker Connects to Plaspy

Once configured, the GG100 is expected to send its tracking and device information to the shared Plaspy server endpoint on port 8888. Plaspy then identifies the protocol automatically, which helps simplify onboarding and reduces the need for manual protocol selection in the platform.

- The tracker is pointed to d.plaspy.com or the corresponding server IP 54.85.159.138.
- Data is sent through port 8888, which is the common Plaspy port for supported devices.
- The device may use UDP or TCP depending on the manufacturer configuration and the deployment method.
- Plaspy automatically detects the tracker protocol after the device begins communication.
- Visibility in Plaspy depends on the tracker successfully applying the settings and reporting to the platform.
- The setup is intended to support operational monitoring, reporting, and ongoing device visibility.

## Common Configuration Workflow

1. Open the official AOVX configuration method or vendor tool used for the GG100.
2. Enter the Plaspy server domain d.plaspy.com or use the IP address 54.85.159.138 if your workflow requires direct entry.
3. Set the communication port to 8888.
4. Choose UDP or TCP only if the device or configuration tool asks you to select a transport mode.
5. Apply the reporting interval and other basic parameters needed for deployment.
6. Save the configuration and confirm that the settings are written to the tracker.
7. Restart the device if the manufacturer workflow requires a reboot for the changes to take effect.
8. Validate that the tracker appears in Plaspy and begins reporting data.

## Example Configuration Commands

The GG100 public setup flow is based on SMS commands. The commands below follow the published configuration sequence and use placeholders where carrier-specific values are required.

- Configure the carrier APN

```text
APN,{{apn}}#
```

If your carrier requires a username and password, the same APN command may include them as placeholders.

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configure the GPRS server to Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Set the update interval

```text
TIMER,60,60#
```

- Switch the device to GPRS mode

```text
GPRSON,1#
```

- Check the saved configuration

```text
PARAM#
```

- Check tracker status

```text
STATUS#
```

In these examples, `{{apn}}` is the carrier access point name, while `{{apnu}}` and `{{apnp}}` are optional APN username and password placeholders when the carrier requires them.

## Configuration Notes

- The public command flow uses SMS-based setup, but the exact tool or message format can vary by firmware and regional package.
- The same Plaspy port is used across supported devices, so the GG100 should be pointed to port 8888 when applying the public server settings.
- UDP or TCP support may depend on the device firmware and the configuration method available in your deployment.
- Plaspy automatically detects the tracker protocol after the device connects, which helps reduce manual platform setup.
- Manufacturer documentation should be reviewed for the latest GG100 behavior, message format, and any firmware-specific details.

## Why Use Plaspy with This Configuration

Using the GG100 with Plaspy gives organizations a practical way to centralize tracker visibility while keeping the public server setup straightforward. The shared Plaspy endpoint, common port, and automatic protocol detection help streamline deployment, especially when you are configuring multiple devices or working across different tracker models.

For teams managing shipments, assets, or monitored goods, this setup supports a clean workflow from initial device configuration to ongoing operational oversight. To learn more about Plaspy, visit https://www.plaspy.com. For the latest device-specific setup details, firmware behavior, and manufacturer guidance, please verify the current information on the official AOVX website at https://www.aovx.com/.
