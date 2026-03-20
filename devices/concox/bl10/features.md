---
slug: /concox/bl10/features
id: bl10-features
sidebar_label: Features
title: Concox - BL10 Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the Concox BL10 smart bike lock and GPS tracker and its compatibility with Plaspy fleet management
keywords:
  - Concox BL10 features
  - Concox BL10 GPS tracker
  - BL10 bike lock tracker
  - Concox BL10 Plaspy
  - micromobility GPS tracker
  - bike share GPS tracker
  - BL10 geofence tamper
  - BL10 Bluetooth iBeacon
  - smart lock GPS
  - fleet management tracker
---

# Concox - BL10 Features

This page summarizes the public feature context for the Concox BL10 when used with Plaspy. It focuses on practical, user-facing capabilities of the BL10 as a GNSS-sharing smart bike lock and hidden GPS tracker and explains how those capabilities are reflected in Plaspy’s fleet management environment. The BL10 is described as Plaspy compatible out of the box and combines a rugged locking mechanism with live location and event reporting for shared bicycle fleets and micromobility operations.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and the manufacturer's implementation choices. The information below is grounded in the model description provided here and is intended as a public summary; operators should confirm exact capabilities for a given device build or deployment with the manufacturer and incorporate platform configuration choices when connecting devices to Plaspy.

## Feature Overview

The BL10 is built to serve shared bike and micromobility fleets by combining an integrated smart lock with GNSS location and local connectivity for rider access. In Plaspy, that means centralized tracking and event visibility for each locked asset across large urban deployments.

- Live GNSS location with LBS assistance to improve positioning in urban canyons and under tree cover.
- Integrated smart locking plus rider access via Bluetooth unlocking and QR code workflows for contactless use.
- Short-range positioning and proximity telemetry using Bluetooth 4.0 and iBeacon signals to support local interactions and usage analytics.
- Tamper and vibration alerts driven by built-in motion sensing to notify operators of potential theft or interference.
- Rugged IPX5 weather resistance and optional solar-assisted charging to extend field deployment life and reduce maintenance cycles.

## Core Features of Concox - BL10

- GNSS positioning with location reporting and cellular uplink for continuous fleet visibility.
- Bluetooth 4.0 support and iBeacon functionality for short-range positioning and rider unlock flows.
- Integrated smart lock mechanism designed for bike-share and micromobility use cases.
- Tamper detection and vibration alerts using onboard motion sensing for anti-theft notifications.
- Robust outdoor design with IPX5 water resistance suitable for long deployments.
- Large battery capacity with optional solar-assisted charging to support extended field operation.
- Cellular connectivity via a Micro SIM slot to transmit location and event data to cloud platforms.

## How These Features Work with Plaspy

When the BL10 is connected to Plaspy, its location, lock state, and event streams become part of the same monitoring and reporting environment operators use to manage fleets. Plaspy consolidates those inputs to provide situational awareness, alerting, and historical records for each asset.

- Real-time location tracking and map views that show GNSS plus LBS-assisted positions for each device.
- Geofence event handling that triggers notifications when bikes enter or leave predefined zones.
- Tamper and vibration alerts surfaced in Plaspy to accelerate recovery and dispatch workflows.
- Lock and unlock events from Bluetooth or QR access reconciled with device telemetry for usage logging.
- Device state and deployment information such as connectivity and basic health indicators visible alongside other fleet assets.

## Typical Use Cases

- Shared bike fleets and public bike-share programs needing integrated lock and tracking hardware to reduce theft and downtime.
- Micromobility operators enforcing geofenced operating areas and managing compliance in dense urban environments.
- Rapid recovery workflows where tamper alerts and live location help locate and retrieve disturbed assets.
- Usage analytics for rebalancing, maintenance scheduling, and optimizing fleet availability based on unlock and proximity events.
- Long-duration outdoor deployments where optional solar assistance and rugged housing reduce servicing frequency.

## Feature Availability Notes

- Feature presence and exact behavior can vary by firmware version and hardware revision; some units may include optional solar or different component revisions.
- Installation and mounting can affect short-range performance for Bluetooth and iBeacon signals; site planning impacts proximity workflows.
- Regional cellular band configurations and operator provisioning affect connectivity; verify the variant intended for your market.
- Some event types and telemetry streams require platform configuration in Plaspy to enable alerts and automated rules.
- Always consult the manufacturer documentation for the device serial number or hardware revision to confirm supported features.

## Why Use Plaspy with These Features

Using the Concox BL10 with Plaspy gives operators a single-pane view of lock state, location, and event data across a micromobility fleet. Plaspy’s platform consolidates position updates, tamper alerts, and short-range unlock records so teams can monitor asset health, respond to incidents faster, and analyze usage for operational improvements.

To learn more about how Plaspy can integrate BL10 devices into your fleet monitoring workflows, visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer-provided details, verify information with Concox at https://www.iconcox.com/ as features and firmware behavior may change over time.
