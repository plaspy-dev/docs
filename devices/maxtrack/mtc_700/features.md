---
slug: /maxtrack/mtc_700/features
id: mtc_700-features
sidebar_label: Features
title: Maxtrack - MTC-700 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the Maxtrack MTC 700 GPS tracker and how it works with Plaspy for fleet monitoring and telemetry
keywords:
  - Maxtrack MTC 700
  - MTC 700 features
  - Maxtrack GPS tracker
  - MTC 700 Plaspy
  - vehicle tracking MTC 700
  - embedded Lua tracker
  - fleet telemetry Maxtrack
  - MTC 700 satellite support
  - MTC 700 Wi Fi
  - black box telemetry
---

# Maxtrack - MTC-700 Features

This page provides a public feature summary for the Maxtrack MTC-700 family and explains how those capabilities are used when the device reports into Plaspy. It focuses on user visible functions and operational value for fleet monitoring, telemetry, and customized tracking scenarios rather than low level configuration or private implementation details.

The MTC-700 family is highly configurable and spans several hardware variants. Exact feature availability depends on firmware version, hardware revision, optional model variants such as the ADV WI FI edition, installation choices, and the manufacturer implementation. Verify specific behavior and limits with the official Maxtrack documentation for the precise device you have.

## Feature Overview

The MTC-700 family targets advanced tracking and telemetry use cases by combining flexible onboard logic, multiple telemetry modes, and communication fallbacks. These capabilities are intended to support logistics, collective transport, risk management, and custom operational rules that run on the device itself.

- Configurable embedded logic and scripting so the device can implement custom business rules and actions.
- Multiple telemetry modes to capture standard position plus additional telemetry streams where supported.
- Communication fallbacks including SMS reporting for cases when packet data is not available.
- Support for wireless peripheral connectivity in the ADV WI FI model to integrate with tablets and smartphones.
- Black box style historical storage for extended telemetry history retention.

## Core Features of Maxtrack - MTC-700

- Embedded scripting and actions using the Lua language to implement custom logic, macros, and business rules on the tracker.
- Onboard modules described by the manufacturer as stock Moon and macros for extended customization and automated behaviors.
- Support for multiple telemetry modes including telemetry, advanced accelerometer telemetry, and CAN network telemetry where the specific hardware variant exposes those inputs.
- Dual SIM card capability with identification of the active SIM to help maintain connectivity and manage operator selection.
- SMS fallback reporting and the ability to send position packets via SMS when packet data is unavailable or external power is absent.
- Jamming detection that marks positions to indicate RF interference events.
- Black box functionality that records vehicle parameters and telemetry history for extended retention as configured.
- Low power modes to reduce current draw when the vehicle is switched off and conserve battery.

## How These Features Work with Plaspy

Plaspy receives position and telemetry streams from compatible MTC-700 devices and presents them in the platform for operational oversight. The platform is built to accept device reports and show location, event markers, and historical traces in a unified view.

- Device location and standard GPS metrics such as position, date time, and speed become visible on Plaspy maps and reports.
- Telemetry modes supported by the unit appear as telemetry channels or event records within Plaspy where the device reports those data types.
- Black box history recorded on the tracker can be uploaded or replayed through Plaspy when the device is configured to send stored records to the server.
- Jamming or interference marks reported by the tracker are shown as events so operators can identify potential signal problems.
- Plaspy automatically detects many common tracker protocols and accepts connections to the platform server; devices can be pointed to the Plaspy server host and use standard transport settings supported by the platform.

## Typical Use Cases

- Fleet logistics operations that require on vehicle rule processing and flexible reporting for route management and exception handling.
- Risk management where jamming detection and black box history help investigate incidents and validate routes.
- Collective transportation systems that need local device intelligence plus central monitoring for schedules and safety oversight.
- Remote operations that combine GPRS data with SMS fallbacks or satellite modem links when cellular coverage is unavailable.
- Integrations where the ADV WI FI model connects with mobile devices or peripherals for local data exchange or user interaction.
- Custom deployments that leverage Lua scripts to implement company specific behaviors directly on the tracker.

## Feature Availability Notes

- Function availability varies by MTC-700 hardware variant and firmware level; some telemetry modes and peripheral interfaces may only be present on specific revisions.
- Satellite communication capability requires connection to an external satellite modem and is dependent on that external hardware and configuration.
- The ADV WI FI model adds wireless peripheral connectivity but Wi Fi features are specific to that variant and may require additional setup.
- SMS fallback behavior and limits depend on mobile operator services and the tracker configuration for messaging.
- Black box storage capacity and retention duration depend on how the device is configured and on available onboard storage resources.

## Why Use Plaspy with These Features

Using the MTC-700 with Plaspy gives organizations a way to centralize visibility for rich device capabilities while keeping the device side intelligence available for local decisions. Plaspy can present location, event markers, and uploaded historical traces alongside operational metadata so teams can monitor fleets, investigate incidents, and take action from a single platform.

To learn more about how Plaspy can work with trackers like the Maxtrack MTC-700 visit https://www.plaspy.com. For the latest device specific features, firmware notes, and hardware variant details please check the manufacturer documentation at https://maxtrack.com.br.
